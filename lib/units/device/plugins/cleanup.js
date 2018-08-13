/**
 * Created by YoungLiu on 2018/6/29.
 */

var syrup = require('stf-syrup')
var Promise = require('bluebird')
var _ = require('lodash')
var fs = require('fs')
var path = require('path')
var logger = require('../../../util/logger')

module.exports = syrup.serial()
    .dependency(require('../support/adb'))
    .dependency(require('../resources/service'))
    .dependency(require('./group'))
    .define(function(options, adb, service, group) {
        var log = logger.createLogger('device:plugins:cleanup')
        var plugin = Object.create(null)

        if (!options.cleanup) {
            return plugin
        }

        function listPackages() {
            return adb.getPackages(options.serial)
        }

        function uninstallPackage(pkg) {
            log.info('Cleaning up package "%s"', pkg)
            return adb.uninstall(options.serial, pkg)
                .catch(function(err) {
                    log.warn('Unable to clean up package "%s"', pkg, err)
                    return true
                })
        }

        return listPackages()
            .then(function(initialPackages) {
                initialPackages.push(service.pkg)

                plugin.removePackages = function() {
                    return listPackages()
                        .then(function(currentPackages) {
                            var exemptPackages
                            var filePath = path.resolve(__dirname, '../../../../exemptPackages.conf')
                            //log.debug('filePath:',filePath)
                            var data = fs.readFileSync(filePath)
                            //log.debug('exemptdata:',data)
                            if(data && data.length>0) {
                                exemptPackages = data.toString().trim().split('\n')
                                //log.debug('exemptPackages:', exemptPackages)
                                //log.debug('initialPackagesBefore：', initialPackages)
                                initialPackages = initialPackages.concat(exemptPackages)
                                //log.debug('initialPackagesAfter：', initialPackages)
                            }
                            var remove = _.difference(currentPackages, initialPackages)
                            //log.debug('remove:',remove)
                            return Promise.map(remove, uninstallPackage)
                        })
                }

                group.on('leave', function() {
                    plugin.removePackages()
                })
            })
            .return(plugin)
    })

