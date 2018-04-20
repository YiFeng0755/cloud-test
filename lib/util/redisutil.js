var redis = require('redis')
var util = require('util')
var Promise = require('bluebird')
Promise.promisifyAll(redis.RedisClient.prototype)
Promise.promisifyAll(redis.Multi.prototype)

var client = redis.createClient()
var multi = client.multi();

client.on('error', function (err) {
    console.log("Error :" + err)
})


function initCasesStructure(cases) {
    var p = []
    var keysMap = {}
    //cases：json data
    cases.forEach(function (element) {
        var _p = new Promise(function (resolve, reject) {

            var key = util.format('%s:%s:%s:%s:%s', element.local_path, element.project_kind, element.project_name, element.case_version, element.sub_module)
            key in keysMap ? keysMap[key] = keysMap[key] + 1 : keysMap[key] = 1

            var encryptedKey = key//encodeURIComponent(key)
            client.multi().hincrby(encryptedKey, 'caseCount', 1).hsetnx(encryptedKey, 'module_desc', element.module_desc).hmset(
                encryptedKey + ':' + keysMap[key],
                ['logic_id', element.logic_id,
                    'name', element.class_name,
                    'desc', element.doc_string,
                    'owner', element.owner,
                    'priority', element.priority,
                    'status', element.status,
                    'mtime', element.mtime,
                    'package', element.package,
                    'out_desc', element.module_desc
                ]
            ).sadd('keyset', encryptedKey).execAsync(function (res) {
                resolve(res)
            })
        })
        p.push(_p)
    })
    return Promise.all(p).then(function (res) {
        return cases
    })
}

function flushdb() {
    return new Promise(function (resolve, reject) {
        client.flushdb(function (err, res) {
            err ? reject(err) : resolve(res)
        })
    })
}


module.exports.flushdb = function () {

    return flushdb()

}

module.exports.initRedis = function (cases, flush) {

    if (flush) {
        return flushdb().then(function (res) {
            return initCasesStructure(cases)
        })
    } else {
        return initCasesStructure(cases)
    }

}

module.exports.retrieveGeneral = function (condition) {

    var cursor = '0'
    var keys = []
    return new Promise(function (resolve, reject) {
        function scan() {
            client.sscan('keyset', cursor, 'MATCH', condition, function (err, reply) {
                if (err) {
                    throw err
                }
                cursor = reply[0]
                if (cursor === '0') {
                    keys.push(reply[1])
                    resolve(keys)
                } else {
                    keys.push(reply[1])
                    return scan()
                }
            })
        }
        scan()
    }).then(function (keys) {
        var flatteredKeys = Array.prototype.concat.apply([], keys)
        var p = []
        flatteredKeys.forEach(function (key) {
            var _p = new Promise(function (resolve, reject) {
                client.hgetallAsync(key).then(function (result) {
                    resolve({
                        'key': key,
                        'data': result
                    })
                })
            })
            p.push(_p)
        })
        return Promise.all(p)
    })


    /*var p = []
    return client.keysAsync(condition).then(function (keys) {
        keys.forEach(function (key) {
            var _p = new Promise(function (resolve, reject) {
                var decodeKey = decodeURIComponent(key)
                var keys_part = decodeKey.split(':')
                if (keys_part.length == 5) {
                    client.hgetallAsync(key).then(function (result) {
                        resolve({
                            'key': decodeKey,
                            'data': result
                        })
                    })
                }
                else {
                    resolve(null)
                }
            })
            p.push(_p)
        })
        return Promise.all(p)
    })*/
}

module.exports.retrieveCaseDetail = function (type, project, version, subModule) {

    var condition = '*:'
    condition = type ? condition + type + ':' : condition
    condition = condition + project + ':' + version + ':' + subModule + ':*'
    var cursor = '0'
    var keys = []
    return new Promise(function (resolve, reject) {
        function scan() {
            client.scan(cursor, 'MATCH', condition, function (err, reply) {
                if (err) {
                    throw err
                }
                cursor = reply[0]
                if (cursor === '0') {
                    keys.push(reply[1])
                    resolve(keys)
                } else {
                    keys.push(reply[1])
                    return scan()
                }
            })
        }
        scan()
    }).then(function (keys) {
        var flatteredKeys = Array.prototype.concat.apply([], keys)
        var p = []
        flatteredKeys.forEach(function (key) {
            var _p = new Promise(function (resolve, reject) {
                client.hgetallAsync(key).then(function (result) {
                    resolve(result)
                })
            })
            p.push(_p)
        })
        return Promise.all(p)
    })

    /*var p = []
    return client.keysAsync('*:*').then(function (keys) {
        keys.forEach(function (key) {
            var decodeKey = decodeURIComponent(key)
            var decodeKeyPart = decodeKey.split(':')
            if (decodeKeyPart.length == 6 && (!type || decodeKeyPart[1] == type) && decodeKeyPart[2] == project && decodeKeyPart[3] == version && decodeKeyPart[4] == subModule) {
                var _p = new Promise(function (resolve, reject) {
                    client.hgetallAsync(key).then(function (result) {
                        resolve(result)
                    })
                })
                p.push(_p)
            }

        })
        return Promise.all(p)
    })*/

}


module.exports.onFileAdded = function (data) {

    return initCasesStructure(data)
}


module.exports.onFileChanged = function (filePath, data) {

    var toBeDeletedKeysPattern = filePath + ':*'
    var cursor = '0'
    var keys = []
    return new Promise(function (resolve, reject) {
        function scan() {
            client.sscan('keyset', cursor, 'MATCH', toBeDeletedKeysPattern, function (err, reply) {
                if (err) {
                    throw err
                }
                cursor = reply[0]
                if (cursor === '0') {
                    keys.push(reply[1])
                    resolve(keys)
                } else {
                    keys.push(reply[1])
                    return scan()
                }
            })
        }
        scan()
    }).then(function (keys) {
        var flatteredKeys = Array.prototype.concat.apply([], keys)
        var p = []
        flatteredKeys.forEach(function (key) {
            var _p = new Promise(function (resolve, reject) {
                client.sremAsync('keyset', key).then(function (result) {
                    resolve(result)
                })
            })
            p.push(_p)
            return Promise.all(p)
        })
    }).then(function (result) {
        return new Promise(function (resolve, reject) {
            // 删除文件路径开头的key
            client.eval("return redis.call('del', unpack(redis.call('keys', ARGV[1])))",
                0,
                toBeDeletedKeysPattern,
                function (err, res) {
                    resolve(res)
                })
        })
    }).then(function (result) {
        // 重建
        return initCasesStructure(data)
    })
    /*var toBeDeletedKeysPattern = filePath + ':*'//encodeURIComponent(filePath + ':*')
    return new Promise(function (resolve, reject) {
        // 删除文件路径开头的key
        client.eval("return redis.call('del', unpack(redis.call('keys', ARGV[1])))",
            0,
            filePath,
            function (err, res) {
                resolve(res)
            })
    }).then(function (result) {
        // 重建
        return initCasesStructure(data)
    })*/
}

module.exports.onFileRemoved = function (filePath) {

    var toBeDeletedKeysPattern = filePath + ':*'
    var cursor = '0'
    var keys = []
    return new Promise(function (resolve, reject) {
        function scan() {
            client.sscan('keyset', cursor, 'MATCH', toBeDeletedKeysPattern, function (err, reply) {
                if (err) {
                    throw err
                }
                cursor = reply[0]
                if (cursor === '0') {
                    keys.push(reply[1])
                    resolve(keys)
                } else {
                    keys.push(reply[1])
                    return scan()
                }
            })
        }
        scan()
    }).then(function (keys) {
        var flatteredKeys = Array.prototype.concat.apply([], keys)
        var p = []
        flatteredKeys.forEach(function (key) {
            var _p = new Promise(function (resolve, reject) {
                client.sremAsync('keyset', key).then(function (result) {
                    resolve(result)
                })
            })
            p.push(_p)
            return Promise.all(p)
        })
    }).then(function (result) {
        return new Promise(function (resolve, reject) {
            // 删除文件路径开头的key
            client.eval("return redis.call('del', unpack(redis.call('keys', ARGV[1])))",
                0,
                toBeDeletedKeysPattern,
                function (err, res) {
                    resolve(res)
                })
        })
    })
    /*    var toBeDeletedKeysPattern = filePath + ':*'//encodeURIComponent(filePath + ':*')
        return new Promise(function (resolve, reject) {
            // 删除文件路径开头的key
            client.eval("return redis.call('del', unpack(redis.call('keys', ARGV[1])))",
                0,
                toBeDeletedKeysPattern,
                function (err, res) {
                    resolve(filePath)
                })
        })*/
}

module.exports.onDirectoryRemoved = function (directoryPath) {

    var toBeDeletedKeysPattern = directoryPath + '/*'
    var cursor = '0'
    var keys = []
    return new Promise(function (resolve, reject) {
        function scan() {
            client.sscan('keyset', cursor, 'MATCH', toBeDeletedKeysPattern, function (err, reply) {
                if (err) {
                    throw err
                }
                cursor = reply[0]
                if (cursor === '0') {
                    keys.push(reply[1])
                    resolve(keys)
                } else {
                    keys.push(reply[1])
                    return scan()
                }
            })
        }
        scan()
    }).then(function (keys) {
        var flatteredKeys = Array.prototype.concat.apply([], keys)
        var p = []
        flatteredKeys.forEach(function (key) {
            var _p = new Promise(function (resolve, reject) {
                client.sremAsync('keyset', key).then(function (result) {
                    resolve(result)
                })
            })
            p.push(_p)
            return Promise.all(p)
        })
    }).then(function () {
        return new Promise(function (resolve, reject) {
            // 删除文件路径开头的key
            client.eval("return redis.call('del', unpack(redis.call('keys', ARGV[1])))",
                0,
                toBeDeletedKeysPattern,
                function (err, res) {
                    resolve(res)
                })
        })
    })
    /*    var toBeDeletedKeysPattern = directoryPath + '/*'//encodeURIComponent(directoryPath + '/*')
        return new Promise(function (resolve, reject) {
            // 删除文件路径开头的key
            client.eval("return redis.call('del', unpack(redis.call('keys', ARGV[1])))",
                0,
                toBeDeletedKeysPattern,
                function (err, res) {
                    resolve(directoryPath)
                })
        })*/

}

module.exports.test = function () {
    return client.hgetallAsync(encodeURIComponent('常规项目:三人简体主版本:V720:three_room'))
    //return client.keysAsync('*')
}
