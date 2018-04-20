#!/usr/bin/env node

/* eslint-disable no-console */
/* eslint-disable promise/prefer-await-to-callbacks */

'use strict';

var fs = require('fs');
var path = require('path');

function waitForDeps(cb) {
  // see if we can import the necessary code
  // try it a ridiculous (but finite) number of times
  var i = 0; // eslint-disable-line no-var
  function check() {
    i++;
    try {
      require('./build/lib/install');
      cb();
    } catch (err) {
      if (err.message.indexOf("Cannot find module './build/lib/install'") !== -1) {
        console.warn('Project does not appear to built yet. Please run `gulp transpile` first.');
        return cb('Could not install module: ' + err);
      }
      console.warn('Error trying to install Chromedriver binary. Waiting and trying again.', err.message);
      if (i <= 200) {
        setTimeout(check, 1000);
      } else {
        cb('Could not import installation module: ' + err);
      }
    }
  }
  check();
}

if (require.main === module) {
  // check if cur dir exists
  var installScript = path.resolve(__dirname, 'build', 'lib', 'install.js'); // eslint-disable-line no-var
  waitForDeps(function (err) {
    if (err) {
      console.warn("Unable to import install script. Re-run `install appium-chromedriver` manually.");
      return;
    }
    fs.stat(installScript, function (err) {
      if (err) {
        console.warn("NOTE: Run 'gulp transpile' before using");
        return;
      }
      require('./build/lib/install').doInstall()['catch'](function (err) {
        console.error(err.stack ? err.stack : err);
        process.exit(1);
      });
    });
  });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3RhbGwtbnBtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBLElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRzdCLFNBQVMsV0FBVyxDQUFFLEVBQUUsRUFBRTs7O0FBR3hCLE1BQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNWLFdBQVMsS0FBSyxHQUFJO0FBQ2hCLEtBQUMsRUFBRSxDQUFDO0FBQ0osUUFBSTtBQUNGLGFBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQy9CLFFBQUUsRUFBRSxDQUFDO0tBQ04sQ0FBQyxPQUFPLEdBQUcsRUFBRTtBQUNaLFVBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsMENBQTBDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtBQUMxRSxlQUFPLENBQUMsSUFBSSxDQUFDLDBFQUEwRSxDQUFDLENBQUM7QUFDekYsZUFBTyxFQUFFLENBQUMsNEJBQTRCLEdBQUcsR0FBRyxDQUFDLENBQUM7T0FDL0M7QUFDRCxhQUFPLENBQUMsSUFBSSxDQUFDLHdFQUF3RSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwRyxVQUFJLENBQUMsSUFBSSxHQUFHLEVBQUU7QUFDWixrQkFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztPQUN6QixNQUFNO0FBQ0wsVUFBRSxDQUFDLHdDQUF3QyxHQUFHLEdBQUcsQ0FBQyxDQUFDO09BQ3BEO0tBQ0Y7R0FDRjtBQUNELE9BQUssRUFBRSxDQUFDO0NBQ1Q7O0FBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTs7QUFFM0IsTUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztBQUMxRSxhQUFXLENBQUMsVUFBVSxHQUFHLEVBQUU7QUFDekIsUUFBSSxHQUFHLEVBQUU7QUFDUCxhQUFPLENBQUMsSUFBSSxDQUFDLGlGQUFpRixDQUFDLENBQUM7QUFDaEcsYUFBTztLQUNSO0FBQ0QsTUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsVUFBVSxHQUFHLEVBQUU7QUFDcEMsVUFBSSxHQUFHLEVBQUU7QUFDUCxlQUFPLENBQUMsSUFBSSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7QUFDeEQsZUFBTztPQUNSO0FBQ0QsYUFBTyxDQUFDLHFCQUFxQixDQUFDLENBQUMsU0FBUyxFQUFFLFNBQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRTtBQUM5RCxlQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztBQUMzQyxlQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQ2pCLENBQUMsQ0FBQztLQUNKLENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6Imluc3RhbGwtbnBtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBwcm9taXNlL3ByZWZlci1hd2FpdC10by1jYWxsYmFja3MgKi9cblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuXG5mdW5jdGlvbiB3YWl0Rm9yRGVwcyAoY2IpIHtcbiAgLy8gc2VlIGlmIHdlIGNhbiBpbXBvcnQgdGhlIG5lY2Vzc2FyeSBjb2RlXG4gIC8vIHRyeSBpdCBhIHJpZGljdWxvdXMgKGJ1dCBmaW5pdGUpIG51bWJlciBvZiB0aW1lc1xuICB2YXIgaSA9IDA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdmFyXG4gIGZ1bmN0aW9uIGNoZWNrICgpIHtcbiAgICBpKys7XG4gICAgdHJ5IHtcbiAgICAgIHJlcXVpcmUoJy4vYnVpbGQvbGliL2luc3RhbGwnKTtcbiAgICAgIGNiKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLm1lc3NhZ2UuaW5kZXhPZihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnLi9idWlsZC9saWIvaW5zdGFsbCdcIikgIT09IC0xKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignUHJvamVjdCBkb2VzIG5vdCBhcHBlYXIgdG8gYnVpbHQgeWV0LiBQbGVhc2UgcnVuIGBndWxwIHRyYW5zcGlsZWAgZmlyc3QuJyk7XG4gICAgICAgIHJldHVybiBjYignQ291bGQgbm90IGluc3RhbGwgbW9kdWxlOiAnICsgZXJyKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUud2FybignRXJyb3IgdHJ5aW5nIHRvIGluc3RhbGwgQ2hyb21lZHJpdmVyIGJpbmFyeS4gV2FpdGluZyBhbmQgdHJ5aW5nIGFnYWluLicsIGVyci5tZXNzYWdlKTtcbiAgICAgIGlmIChpIDw9IDIwMCkge1xuICAgICAgICBzZXRUaW1lb3V0KGNoZWNrLCAxMDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNiKCdDb3VsZCBub3QgaW1wb3J0IGluc3RhbGxhdGlvbiBtb2R1bGU6ICcgKyBlcnIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjaGVjaygpO1xufVxuXG5pZiAocmVxdWlyZS5tYWluID09PSBtb2R1bGUpIHtcbiAgLy8gY2hlY2sgaWYgY3VyIGRpciBleGlzdHNcbiAgdmFyIGluc3RhbGxTY3JpcHQgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnYnVpbGQnLCAnbGliJywgJ2luc3RhbGwuanMnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby12YXJcbiAgd2FpdEZvckRlcHMoZnVuY3Rpb24gKGVycikge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIlVuYWJsZSB0byBpbXBvcnQgaW5zdGFsbCBzY3JpcHQuIFJlLXJ1biBgaW5zdGFsbCBhcHBpdW0tY2hyb21lZHJpdmVyYCBtYW51YWxseS5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZzLnN0YXQoaW5zdGFsbFNjcmlwdCwgZnVuY3Rpb24gKGVycikge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJOT1RFOiBSdW4gJ2d1bHAgdHJhbnNwaWxlJyBiZWZvcmUgdXNpbmdcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJlcXVpcmUoJy4vYnVpbGQvbGliL2luc3RhbGwnKS5kb0luc3RhbGwoKS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrID8gZXJyLnN0YWNrIDogZXJyKTtcbiAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIuLiJ9
