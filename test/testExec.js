var exec = require('child_process').exec

var s = 'ls'
var o = {}
exec('rm ./gui.txt')
/*exec('rm ./gui.txt', function(err, stdout, stderr){
	console.log('err:', err)
    if(stdout){console.log('stdout length', stdout.length)}
	console.log('stdout:', stdout)
	console.log('stderr:', stderr)
	o[s] = stdout.toString().split(/\s+|\n/)
	console.log(o)
})*/

/*exec('ls|grep jaaaaaaaaaaaaaaaaaa', function(err, stdout, stderr){
        console.log('err:', err)
        console.log('stdout:', stdout)
        console.log('stderr:', stderr)
})*/
//console.log(l.toString())
