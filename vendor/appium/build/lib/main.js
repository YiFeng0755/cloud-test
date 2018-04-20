#!/usr/bin/env node

require('source-map-support').install();

'use strict';

var _slicedToArray = require('babel-runtime/helpers/sliced-to-array')['default'];

var _toConsumableArray = require('babel-runtime/helpers/to-consumable-array')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _logsink = require('./logsink');

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

// logger needs to remain first of imports

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _appiumBaseDriver = require('appium-base-driver');

var _asyncbox = require('asyncbox');

var _parser = require('./parser');

var _parser2 = _interopRequireDefault(_parser);

var _config = require('./config');

var _appium = require('./appium');

var _appium2 = _interopRequireDefault(_appium);

var _gridRegister = require('./grid-register');

var _gridRegister2 = _interopRequireDefault(_gridRegister);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function preflightChecks(parser, args) {
  var throwInsteadOfExit = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
  return _regeneratorRuntime.async(function preflightChecks$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.prev = 0;

        (0, _config.checkNodeOk)();
        if (args.asyncTrace) {
          require('longjohn').async_trace_limit = -1;
        }

        if (!args.showConfig) {
          context$1$0.next = 7;
          break;
        }

        context$1$0.next = 6;
        return _regeneratorRuntime.awrap((0, _config.showConfig)());

      case 6:
        process.exit(0);

      case 7:
        (0, _config.warnNodeDeprecations)();
        (0, _config.validateServerArgs)(parser, args);

        if (!args.tmpDir) {
          context$1$0.next = 12;
          break;
        }

        context$1$0.next = 12;
        return _regeneratorRuntime.awrap((0, _config.validateTmpDir)(args.tmpDir));

      case 12:
        context$1$0.next = 20;
        break;

      case 14:
        context$1$0.prev = 14;
        context$1$0.t0 = context$1$0['catch'](0);

        _logger2['default'].error(context$1$0.t0.message.red);

        if (!throwInsteadOfExit) {
          context$1$0.next = 19;
          break;
        }

        throw context$1$0.t0;

      case 19:

        process.exit(1);

      case 20:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this, [[0, 14]]);
}

function logDeprecationWarning(deprecatedArgs) {
  _logger2['default'].warn('Deprecated server args:');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _getIterator(_lodash2['default'].toPairs(deprecatedArgs)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2);

      var arg = _step$value[0];
      var realArg = _step$value[1];

      _logger2['default'].warn('  ' + arg.red + ' => ' + realArg);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function logNonDefaultArgsWarning(args) {
  // cleanly print out the default arguments, allowing for prefix and timestamp
  function getValueArray(obj) {
    var indent = arguments.length <= 1 || arguments[1] === undefined ? '  ' : arguments[1];

    if (!_lodash2['default'].isObject(obj)) {
      return [obj];
    }

    var strArr = ['{'];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = _getIterator(_lodash2['default'].toPairs(obj)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _step2$value = _slicedToArray(_step2.value, 2);

        var arg = _step2$value[0];
        var value = _step2$value[1];

        if (!_lodash2['default'].isObject(value)) {
          strArr.push(indent + '  ' + arg + ': ' + value);
        } else {
          value = getValueArray(value, indent + '  ');
          strArr.push(indent + '  ' + arg + ': ' + value.shift());
          strArr.push.apply(strArr, _toConsumableArray(value));
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2['return']) {
          _iterator2['return']();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    strArr.push(indent + '}');
    return strArr;
  }
  _logger2['default'].info('Non-default server args:');
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = _getIterator(_lodash2['default'].toPairs(args)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var _step3$value = _slicedToArray(_step3.value, 2);

      var arg = _step3$value[0];
      var value = _step3$value[1];

      value = getValueArray(value);
      _logger2['default'].info('  ' + arg + ': ' + value.shift());
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = _getIterator(value), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var val = _step4.value;

          _logger2['default'].info(val);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4['return']) {
            _iterator4['return']();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3['return']) {
        _iterator3['return']();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
}

function logDefaultCapabilitiesWarning(caps) {
  _logger2['default'].info('Default capabilities, which will be added to each request ' + 'unless overridden by desired capabilities:');
  _util2['default'].inspect(caps);
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = _getIterator(_lodash2['default'].toPairs(caps)), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var _step5$value = _slicedToArray(_step5.value, 2);

      var cap = _step5$value[0];
      var value = _step5$value[1];

      _logger2['default'].info('  ' + cap + ': ' + _util2['default'].inspect(value));
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5['return']) {
        _iterator5['return']();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }
}

function logStartupInfo(parser, args) {
  var welcome, appiumRev, showArgs, deprecatedArgs;
  return _regeneratorRuntime.async(function logStartupInfo$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        welcome = 'Welcome to Appium v' + _config.APPIUM_VER;
        context$1$0.next = 3;
        return _regeneratorRuntime.awrap((0, _config.getGitRev)());

      case 3:
        appiumRev = context$1$0.sent;

        if (appiumRev) {
          welcome += ' (REV ' + appiumRev + ')';
        }
        _logger2['default'].info(welcome);

        showArgs = (0, _config.getNonDefaultArgs)(parser, args);

        if (_lodash2['default'].size(showArgs)) {
          logNonDefaultArgsWarning(showArgs);
        }
        deprecatedArgs = (0, _config.getDeprecatedArgs)(parser, args);

        if (_lodash2['default'].size(deprecatedArgs)) {
          logDeprecationWarning(deprecatedArgs);
        }
        if (!_lodash2['default'].isEmpty(args.defaultCapabilities)) {
          logDefaultCapabilitiesWarning(args.defaultCapabilities);
        }
        // TODO: bring back loglevel reporting below once logger is flushed out
        //logger.info('Console LogLevel: ' + logger.transports.console.level);
        //if (logger.transports.file) {
        //logger.info('File LogLevel: ' + logger.transports.file.level);
        //}

      case 11:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

function logServerPort(address, port) {
  var logMessage = 'Appium REST http interface listener started on ' + (address + ':' + port);
  _logger2['default'].info(logMessage);
}

function initHeapdump(args) {
  if (args.heapdumpEnabled) {
    require('heapdump');
  }
}

function main() {
  var args = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
  var parser, throwInsteadOfExit, router, server;
  return _regeneratorRuntime.async(function main$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        parser = (0, _parser2['default'])();
        throwInsteadOfExit = false;

        if (args) {
          // a containing package passed in their own args, let's fill them out
          // with defaults
          args = _Object$assign({}, (0, _parser.getDefaultArgs)(), args);

          // if we have a containing package instead of running as a CLI process,
          // that package might not appreciate us calling 'process.exit' willy-
          // nilly, so give it the option to have us throw instead of exit
          if (args.throwInsteadOfExit) {
            throwInsteadOfExit = true;
            // but remove it since it's not a real server arg per se
            delete args.throwInsteadOfExit;
          }
        } else {
          // otherwise parse from CLI
          args = parser.parseArgs();
        }
        initHeapdump(args);
        context$1$0.next = 6;
        return _regeneratorRuntime.awrap((0, _logsink.init)(args));

      case 6:
        context$1$0.next = 8;
        return _regeneratorRuntime.awrap(preflightChecks(parser, args, throwInsteadOfExit));

      case 8:
        context$1$0.next = 10;
        return _regeneratorRuntime.awrap(logStartupInfo(parser, args));

      case 10:
        router = (0, _appium2['default'])(args);
        context$1$0.next = 13;
        return _regeneratorRuntime.awrap((0, _appiumBaseDriver.server)(router, args.port, args.address));

      case 13:
        server = context$1$0.sent;
        context$1$0.prev = 14;

        if (!(args.nodeconfig !== null)) {
          context$1$0.next = 18;
          break;
        }

        context$1$0.next = 18;
        return _regeneratorRuntime.awrap((0, _gridRegister2['default'])(args.nodeconfig, args.address, args.port));

      case 18:
        context$1$0.next = 25;
        break;

      case 20:
        context$1$0.prev = 20;
        context$1$0.t0 = context$1$0['catch'](14);
        context$1$0.next = 24;
        return _regeneratorRuntime.awrap(server.close());

      case 24:
        throw context$1$0.t0;

      case 25:

        process.once('SIGINT', function callee$1$0() {
          return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
              case 0:
                _logger2['default'].info('Received SIGINT - shutting down');
                context$2$0.next = 3;
                return _regeneratorRuntime.awrap(server.close());

              case 3:
              case 'end':
                return context$2$0.stop();
            }
          }, null, this);
        });

        process.once('SIGTERM', function callee$1$0() {
          return _regeneratorRuntime.async(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
              case 0:
                _logger2['default'].info('Received SIGTERM - shutting down');
                context$2$0.next = 3;
                return _regeneratorRuntime.awrap(server.close());

              case 3:
              case 'end':
                return context$2$0.stop();
            }
          }, null, this);
        });

        logServerPort(args.address, args.port);

        return context$1$0.abrupt('return', server);

      case 29:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this, [[14, 20]]);
}

// when a file is run directly from Node, require.main is set to its module
if (require.main === module) {
  (0, _asyncbox.asyncify)(main);
}

exports.main = main;

// TODO prelaunch if args.launch is set
// TODO: startAlertSocket(server, appiumServer);

// configure as node on grid, if necessary
//# sourceMappingURL=data:application/json;charset=utf8;base64,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TUFBTSxFQUFFLElBQUksQ0FBQzs7O0FBRTlCLGNBQU0sR0FBRyx5QkFBZ0IsSUFBSSxDQUFDOzt5Q0FFZiw4QkFBVyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDOzs7QUFBMUQsY0FBTTs7O2NBT0osSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUE7Ozs7Ozt5Q0FDcEIsK0JBQWEsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7Ozs7Ozs7Ozs7eUNBR3hELE1BQU0sQ0FBQyxLQUFLLEVBQUU7Ozs7Ozs7QUFJdEIsZUFBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Ozs7QUFDckIsb0NBQU8sSUFBSSxtQ0FBbUMsQ0FBQzs7aURBQ3pDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7Ozs7Ozs7U0FDckIsQ0FBQyxDQUFDOztBQUVILGVBQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFOzs7O0FBQ3RCLG9DQUFPLElBQUksb0NBQW9DLENBQUM7O2lEQUMxQyxNQUFNLENBQUMsS0FBSyxFQUFFOzs7Ozs7O1NBQ3JCLENBQUMsQ0FBQzs7QUFFSCxxQkFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs0Q0FFaEMsTUFBTTs7Ozs7OztDQUNkOzs7QUFJRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO0FBQzNCLDBCQUFTLElBQUksQ0FBQyxDQUFDO0NBQ2hCOztRQUVRLElBQUksR0FBSixJQUFJIiwiZmlsZSI6ImxpYi9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyB0cmFuc3BpbGU6bWFpblxuXG5pbXBvcnQgeyBpbml0IGFzIGxvZ3NpbmtJbml0IH0gZnJvbSAnLi9sb2dzaW5rJztcbmltcG9ydCBsb2dnZXIgZnJvbSAnLi9sb2dnZXInOyAvLyBsb2dnZXIgbmVlZHMgdG8gcmVtYWluIGZpcnN0IG9mIGltcG9ydHNcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBzZXJ2ZXIgYXMgYmFzZVNlcnZlciB9IGZyb20gJ2FwcGl1bS1iYXNlLWRyaXZlcic7XG5pbXBvcnQgeyBhc3luY2lmeSB9IGZyb20gJ2FzeW5jYm94JztcbmltcG9ydCB7IGRlZmF1bHQgYXMgZ2V0UGFyc2VyLCBnZXREZWZhdWx0QXJncyB9IGZyb20gJy4vcGFyc2VyJztcbmltcG9ydCB7IHNob3dDb25maWcsIGNoZWNrTm9kZU9rLCB2YWxpZGF0ZVNlcnZlckFyZ3MsXG4gICAgICAgICB3YXJuTm9kZURlcHJlY2F0aW9ucywgdmFsaWRhdGVUbXBEaXIsIGdldE5vbkRlZmF1bHRBcmdzLFxuICAgICAgICAgZ2V0RGVwcmVjYXRlZEFyZ3MsIGdldEdpdFJldiwgQVBQSVVNX1ZFUiB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCBnZXRBcHBpdW1Sb3V0ZXIgZnJvbSAnLi9hcHBpdW0nO1xuaW1wb3J0IHJlZ2lzdGVyTm9kZSBmcm9tICcuL2dyaWQtcmVnaXN0ZXInO1xuaW1wb3J0IHV0aWwgZnJvbSAndXRpbCc7XG5cblxuYXN5bmMgZnVuY3Rpb24gcHJlZmxpZ2h0Q2hlY2tzIChwYXJzZXIsIGFyZ3MsIHRocm93SW5zdGVhZE9mRXhpdCA9IGZhbHNlKSB7XG4gIHRyeSB7XG4gICAgY2hlY2tOb2RlT2soKTtcbiAgICBpZiAoYXJncy5hc3luY1RyYWNlKSB7XG4gICAgICByZXF1aXJlKCdsb25nam9obicpLmFzeW5jX3RyYWNlX2xpbWl0ID0gLTE7XG4gICAgfVxuICAgIGlmIChhcmdzLnNob3dDb25maWcpIHtcbiAgICAgIGF3YWl0IHNob3dDb25maWcoKTtcbiAgICAgIHByb2Nlc3MuZXhpdCgwKTtcbiAgICB9XG4gICAgd2Fybk5vZGVEZXByZWNhdGlvbnMoKTtcbiAgICB2YWxpZGF0ZVNlcnZlckFyZ3MocGFyc2VyLCBhcmdzKTtcbiAgICBpZiAoYXJncy50bXBEaXIpIHtcbiAgICAgIGF3YWl0IHZhbGlkYXRlVG1wRGlyKGFyZ3MudG1wRGlyKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGxvZ2dlci5lcnJvcihlcnIubWVzc2FnZS5yZWQpO1xuICAgIGlmICh0aHJvd0luc3RlYWRPZkV4aXQpIHtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG5cbiAgICBwcm9jZXNzLmV4aXQoMSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9nRGVwcmVjYXRpb25XYXJuaW5nIChkZXByZWNhdGVkQXJncykge1xuICBsb2dnZXIud2FybignRGVwcmVjYXRlZCBzZXJ2ZXIgYXJnczonKTtcbiAgZm9yIChsZXQgW2FyZywgcmVhbEFyZ10gb2YgXy50b1BhaXJzKGRlcHJlY2F0ZWRBcmdzKSkge1xuICAgIGxvZ2dlci53YXJuKGAgICR7YXJnLnJlZH0gPT4gJHtyZWFsQXJnfWApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvZ05vbkRlZmF1bHRBcmdzV2FybmluZyAoYXJncykge1xuICAvLyBjbGVhbmx5IHByaW50IG91dCB0aGUgZGVmYXVsdCBhcmd1bWVudHMsIGFsbG93aW5nIGZvciBwcmVmaXggYW5kIHRpbWVzdGFtcFxuICBmdW5jdGlvbiBnZXRWYWx1ZUFycmF5IChvYmosIGluZGVudCA9ICcgICcpIHtcbiAgICBpZiAoIV8uaXNPYmplY3Qob2JqKSkge1xuICAgICAgcmV0dXJuIFtvYmpdO1xuICAgIH1cblxuICAgIGxldCBzdHJBcnIgPSBbJ3snXTtcbiAgICBmb3IgKGxldCBbYXJnLCB2YWx1ZV0gb2YgXy50b1BhaXJzKG9iaikpIHtcbiAgICAgIGlmICghXy5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgc3RyQXJyLnB1c2goYCR7aW5kZW50fSAgJHthcmd9OiAke3ZhbHVlfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBnZXRWYWx1ZUFycmF5KHZhbHVlLCBgJHtpbmRlbnR9ICBgKTtcbiAgICAgICAgc3RyQXJyLnB1c2goYCR7aW5kZW50fSAgJHthcmd9OiAke3ZhbHVlLnNoaWZ0KCl9YCk7XG4gICAgICAgIHN0ckFyci5wdXNoKC4uLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3RyQXJyLnB1c2goYCR7aW5kZW50fX1gKTtcbiAgICByZXR1cm4gc3RyQXJyO1xuICB9XG4gIGxvZ2dlci5pbmZvKCdOb24tZGVmYXVsdCBzZXJ2ZXIgYXJnczonKTtcbiAgZm9yIChsZXQgW2FyZywgdmFsdWVdIG9mIF8udG9QYWlycyhhcmdzKSkge1xuICAgIHZhbHVlID0gZ2V0VmFsdWVBcnJheSh2YWx1ZSk7XG4gICAgbG9nZ2VyLmluZm8oYCAgJHthcmd9OiAke3ZhbHVlLnNoaWZ0KCl9YCk7XG4gICAgZm9yIChsZXQgdmFsIG9mIHZhbHVlKSB7XG4gICAgICBsb2dnZXIuaW5mbyh2YWwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBsb2dEZWZhdWx0Q2FwYWJpbGl0aWVzV2FybmluZyAoY2Fwcykge1xuICBsb2dnZXIuaW5mbygnRGVmYXVsdCBjYXBhYmlsaXRpZXMsIHdoaWNoIHdpbGwgYmUgYWRkZWQgdG8gZWFjaCByZXF1ZXN0ICcgK1xuICAgICAgICAgICAgICAndW5sZXNzIG92ZXJyaWRkZW4gYnkgZGVzaXJlZCBjYXBhYmlsaXRpZXM6Jyk7XG4gIHV0aWwuaW5zcGVjdChjYXBzKTtcbiAgZm9yIChsZXQgW2NhcCwgdmFsdWVdIG9mIF8udG9QYWlycyhjYXBzKSkge1xuICAgIGxvZ2dlci5pbmZvKGAgICR7Y2FwfTogJHt1dGlsLmluc3BlY3QodmFsdWUpfWApO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvZ1N0YXJ0dXBJbmZvIChwYXJzZXIsIGFyZ3MpIHtcbiAgbGV0IHdlbGNvbWUgPSBgV2VsY29tZSB0byBBcHBpdW0gdiR7QVBQSVVNX1ZFUn1gO1xuICBsZXQgYXBwaXVtUmV2ID0gYXdhaXQgZ2V0R2l0UmV2KCk7XG4gIGlmIChhcHBpdW1SZXYpIHtcbiAgICB3ZWxjb21lICs9IGAgKFJFViAke2FwcGl1bVJldn0pYDtcbiAgfVxuICBsb2dnZXIuaW5mbyh3ZWxjb21lKTtcblxuICBsZXQgc2hvd0FyZ3MgPSBnZXROb25EZWZhdWx0QXJncyhwYXJzZXIsIGFyZ3MpO1xuICBpZiAoXy5zaXplKHNob3dBcmdzKSkge1xuICAgIGxvZ05vbkRlZmF1bHRBcmdzV2FybmluZyhzaG93QXJncyk7XG4gIH1cbiAgbGV0IGRlcHJlY2F0ZWRBcmdzID0gZ2V0RGVwcmVjYXRlZEFyZ3MocGFyc2VyLCBhcmdzKTtcbiAgaWYgKF8uc2l6ZShkZXByZWNhdGVkQXJncykpIHtcbiAgICBsb2dEZXByZWNhdGlvbldhcm5pbmcoZGVwcmVjYXRlZEFyZ3MpO1xuICB9XG4gIGlmICghXy5pc0VtcHR5KGFyZ3MuZGVmYXVsdENhcGFiaWxpdGllcykpIHtcbiAgICBsb2dEZWZhdWx0Q2FwYWJpbGl0aWVzV2FybmluZyhhcmdzLmRlZmF1bHRDYXBhYmlsaXRpZXMpO1xuICB9XG4gIC8vIFRPRE86IGJyaW5nIGJhY2sgbG9nbGV2ZWwgcmVwb3J0aW5nIGJlbG93IG9uY2UgbG9nZ2VyIGlzIGZsdXNoZWQgb3V0XG4gIC8vbG9nZ2VyLmluZm8oJ0NvbnNvbGUgTG9nTGV2ZWw6ICcgKyBsb2dnZXIudHJhbnNwb3J0cy5jb25zb2xlLmxldmVsKTtcbiAgLy9pZiAobG9nZ2VyLnRyYW5zcG9ydHMuZmlsZSkge1xuICAgIC8vbG9nZ2VyLmluZm8oJ0ZpbGUgTG9nTGV2ZWw6ICcgKyBsb2dnZXIudHJhbnNwb3J0cy5maWxlLmxldmVsKTtcbiAgLy99XG59XG5cbmZ1bmN0aW9uIGxvZ1NlcnZlclBvcnQgKGFkZHJlc3MsIHBvcnQpIHtcbiAgbGV0IGxvZ01lc3NhZ2UgPSBgQXBwaXVtIFJFU1QgaHR0cCBpbnRlcmZhY2UgbGlzdGVuZXIgc3RhcnRlZCBvbiBgICtcbiAgICAgICAgICAgICAgICAgICBgJHthZGRyZXNzfToke3BvcnR9YDtcbiAgbG9nZ2VyLmluZm8obG9nTWVzc2FnZSk7XG59XG5cbmZ1bmN0aW9uIGluaXRIZWFwZHVtcCAoYXJncykge1xuICBpZiAoYXJncy5oZWFwZHVtcEVuYWJsZWQpIHtcbiAgICByZXF1aXJlKCdoZWFwZHVtcCcpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG1haW4gKGFyZ3MgPSBudWxsKSB7XG4gIGxldCBwYXJzZXIgPSBnZXRQYXJzZXIoKTtcbiAgbGV0IHRocm93SW5zdGVhZE9mRXhpdCA9IGZhbHNlO1xuICBpZiAoYXJncykge1xuICAgIC8vIGEgY29udGFpbmluZyBwYWNrYWdlIHBhc3NlZCBpbiB0aGVpciBvd24gYXJncywgbGV0J3MgZmlsbCB0aGVtIG91dFxuICAgIC8vIHdpdGggZGVmYXVsdHNcbiAgICBhcmdzID0gT2JqZWN0LmFzc2lnbih7fSwgZ2V0RGVmYXVsdEFyZ3MoKSwgYXJncyk7XG5cbiAgICAvLyBpZiB3ZSBoYXZlIGEgY29udGFpbmluZyBwYWNrYWdlIGluc3RlYWQgb2YgcnVubmluZyBhcyBhIENMSSBwcm9jZXNzLFxuICAgIC8vIHRoYXQgcGFja2FnZSBtaWdodCBub3QgYXBwcmVjaWF0ZSB1cyBjYWxsaW5nICdwcm9jZXNzLmV4aXQnIHdpbGx5LVxuICAgIC8vIG5pbGx5LCBzbyBnaXZlIGl0IHRoZSBvcHRpb24gdG8gaGF2ZSB1cyB0aHJvdyBpbnN0ZWFkIG9mIGV4aXRcbiAgICBpZiAoYXJncy50aHJvd0luc3RlYWRPZkV4aXQpIHtcbiAgICAgIHRocm93SW5zdGVhZE9mRXhpdCA9IHRydWU7XG4gICAgICAvLyBidXQgcmVtb3ZlIGl0IHNpbmNlIGl0J3Mgbm90IGEgcmVhbCBzZXJ2ZXIgYXJnIHBlciBzZVxuICAgICAgZGVsZXRlIGFyZ3MudGhyb3dJbnN0ZWFkT2ZFeGl0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBvdGhlcndpc2UgcGFyc2UgZnJvbSBDTElcbiAgICBhcmdzID0gcGFyc2VyLnBhcnNlQXJncygpO1xuICB9XG4gIGluaXRIZWFwZHVtcChhcmdzKTtcbiAgYXdhaXQgbG9nc2lua0luaXQoYXJncyk7XG4gIGF3YWl0IHByZWZsaWdodENoZWNrcyhwYXJzZXIsIGFyZ3MsIHRocm93SW5zdGVhZE9mRXhpdCk7XG4gIGF3YWl0IGxvZ1N0YXJ0dXBJbmZvKHBhcnNlciwgYXJncyk7XG5cbiAgbGV0IHJvdXRlciA9IGdldEFwcGl1bVJvdXRlcihhcmdzKTtcblxuICBsZXQgc2VydmVyID0gYXdhaXQgYmFzZVNlcnZlcihyb3V0ZXIsIGFyZ3MucG9ydCwgYXJncy5hZGRyZXNzKTtcblxuICB0cnkge1xuICAgIC8vIFRPRE8gcHJlbGF1bmNoIGlmIGFyZ3MubGF1bmNoIGlzIHNldFxuICAgIC8vIFRPRE86IHN0YXJ0QWxlcnRTb2NrZXQoc2VydmVyLCBhcHBpdW1TZXJ2ZXIpO1xuXG4gICAgLy8gY29uZmlndXJlIGFzIG5vZGUgb24gZ3JpZCwgaWYgbmVjZXNzYXJ5XG4gICAgaWYgKGFyZ3Mubm9kZWNvbmZpZyAhPT0gbnVsbCkge1xuICAgICAgYXdhaXQgcmVnaXN0ZXJOb2RlKGFyZ3Mubm9kZWNvbmZpZywgYXJncy5hZGRyZXNzLCBhcmdzLnBvcnQpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgYXdhaXQgc2VydmVyLmNsb3NlKCk7XG4gICAgdGhyb3cgZXJyO1xuICB9XG5cbiAgcHJvY2Vzcy5vbmNlKCdTSUdJTlQnLCBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgbG9nZ2VyLmluZm8oYFJlY2VpdmVkIFNJR0lOVCAtIHNodXR0aW5nIGRvd25gKTtcbiAgICBhd2FpdCBzZXJ2ZXIuY2xvc2UoKTtcbiAgfSk7XG5cbiAgcHJvY2Vzcy5vbmNlKCdTSUdURVJNJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGxvZ2dlci5pbmZvKGBSZWNlaXZlZCBTSUdURVJNIC0gc2h1dHRpbmcgZG93bmApO1xuICAgIGF3YWl0IHNlcnZlci5jbG9zZSgpO1xuICB9KTtcblxuICBsb2dTZXJ2ZXJQb3J0KGFyZ3MuYWRkcmVzcywgYXJncy5wb3J0KTtcblxuICByZXR1cm4gc2VydmVyO1xufVxuXG5cbi8vIHdoZW4gYSBmaWxlIGlzIHJ1biBkaXJlY3RseSBmcm9tIE5vZGUsIHJlcXVpcmUubWFpbiBpcyBzZXQgdG8gaXRzIG1vZHVsZVxuaWYgKHJlcXVpcmUubWFpbiA9PT0gbW9kdWxlKSB7XG4gIGFzeW5jaWZ5KG1haW4pO1xufVxuXG5leHBvcnQgeyBtYWluIH07XG4iXSwic291cmNlUm9vdCI6Ii4uLy4uIn0=
