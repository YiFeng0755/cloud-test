var Promise = require('bluebird')
var dbapi = require('../../lib/db/apiv2')
var fileutil = require('../../lib/util/fileutil')
var httputil = require('../../lib/util/httputil')
var uitest = require('../../lib/units/autoui')
var path = require('path')
var r = require('rethinkdb')
var _  = require('lodash')
var moment = require('moment')

var taskid = '1505714830356_JessicZeng'



  var taskid = '1516691773346_LucyLiu'
  var serial = '0cf16cf5'
	var modules = []
	var status = null

  dbapi.loadUITest(taskid, serial, modules, status).then(function (cursor) {
     return Promise.promisify(cursor.toArray, cursor)()
  }).then(function (list) {
    list.forEach(function (detail) {
      var t = detail.error.replace(/(<p class="error_content">)([\s\S]*?)(<\/p>)/g, function () {
        return arguments['1'] + arguments['2'].replace(/ /g, '&nbsp;').replace(/\n/g, '<br />') + arguments['3']
      })
      detail.screenCaps.map(function (screenPath) {
        if (path.extname(screenPath) != '.png' || path.extname(screenPath) != '.jpg') {
          return screenPath + '.png'
        }
        else {
          return screenPath
        }
      })
      _.merge(detail, { error: t })
    })

    list.sort(function (a, b) {
      return moment(a.starttime).isBefore(b.starttime) ? -1 : 1
    })
    var o = {
      success: true,
      result: list
    }
	var tt = JSON.stringify(o, null ,2)
	console.log(tt)
	var kk = JSON.parse(tt)
	kk.result.forEach(function(n) {
		console.log(n)
	})

})
