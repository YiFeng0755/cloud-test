/**
 * Created by YoungLiu on 2018/5/10.
 */

var dbapi = require('../../db/api')

module.exports = function (taskid) {
    return dbapi.Loadtasklistdetail(taskid)
        .then(function (detail) {
            var detailResult = new Array()
            if(detail && detail.length > 0){
                var deviceError
                detail.forEach(function (deviceResult) {
                    if(deviceResult.result && deviceResult.result.errorType){
                        deviceError = {serial : deviceResult.serial
                            , model : deviceResult.model
                            , errorType : deviceResult.result.errorType
                            , reason : deviceResult.result.reason
                            , markName: deviceResult.markName
                            , mobilecount : 1}
                        detailResult.push(deviceError)
                    }
                    if(deviceResult.result && deviceResult.result.luacrash){
                        deviceError = {serial : deviceResult.serial
                            , model : deviceResult.model
                            , errorType : 'luacrash'
                            , reason : deviceResult.result.luacrash
                            , markName: deviceResult.markName
                            , mobilecount : 1}
                        detailResult.push(deviceError)
                    }
                })
            }
            return detailResult
        })
}