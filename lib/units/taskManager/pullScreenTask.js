/**
 * Created by GuixiangGui on 2017/5/8.
 */

var adbkit = require('adbkit')
var fs = require('fs')
var logger = require('../../util/logger')


var _this
function pullScreenTask() {
  this.pullTaskObj = {}
  this.log = logger.createLogger('pullScreenTask')
  _this = this
}

pullScreenTask.prototype.pushTask = function (host, option, cb) {
  this.log.debug('push pull screen task')
  var taskInfo = {option: option, cb: cb}
  if (!this.pullTaskObj[host]) {
    this.pullTaskObj[host] = {taskRun: false, taskArr: [taskInfo]}
  } else {
    this.pullTaskObj[host].taskArr.push(taskInfo)
  }

  if (!this.pullTaskObj[host].taskRun) {
    this.pullTaskObj[host].taskRun = true
    runTask(host)
  }

  function runTask(host) {
    var pullTaskFinish = true
    var pullFileLoop = setInterval(function(){
      if(pullTaskFinish){
        var taskI= _this.pullTaskObj[host].taskArr.shift()
        if(taskI){
          _this.log.debug('host:' + host + '   pull file tasks: ' + _this.pullTaskObj[host].taskArr)
          _this.log.debug('host:' + host + 'task info: ' + taskI)
          pullFiles(taskI)
        }        
      }
    }, 3000)
    // if (_this.pullTaskObj[host].taskArr.length > 0) {
    //   pullFiles(_this.pullTaskObj[host].taskArr.shift())
    // } else {
    //   _this.pullTaskObj[host].taskRun = false
    // }

    function pullFiles(taskInfo) {
      pullTaskFinish = false
      var pullfinish = true
      var loop = setInterval(function(){
        if(!pullfinish){
          return
        }
        if (taskInfo.option.fileNames && taskInfo.option.fileNames.length > 0) {
          pullfinish = false
          var adb = taskInfo.option.adb
          var fileOnPhonePath = taskInfo.option.fileOnPhonePath
          var fileOnPcPath = taskInfo.option.fileOnPcPath
          var serial = taskInfo.option.serial
          _this.log.debug('fileSize:' + taskInfo.option.fileNames.length + '  fileOnPcPath:' + fileOnPcPath)
          var fileName = taskInfo.option.fileNames.shift()
  
          adb.pull(serial, fileOnPhonePath + fileName)
            .then(function (transfer) {
              transfer.on('end', function () {
                pullfinish = true
              })
  
              transfer.pipe(fs.createWriteStream(fileOnPcPath + fileName))
            })
            .catch(function(err){
              _this.log.debug('pull screenCap from phone error:', err)
              pullfinish = true
            })
        } else {
          var cb = taskInfo.cb
          clearInterval(loop)
          pullTaskFinish = true
          cb()
        }
      }, 100)
    }
  }

}

module.exports = new pullScreenTask()
