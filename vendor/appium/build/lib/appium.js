'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _slicedToArray = require('babel-runtime/helpers/sliced-to-array')['default'];

var _toConsumableArray = require('babel-runtime/helpers/to-consumable-array')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _config = require('./config');

var _appiumBaseDriver = require('appium-base-driver');

var _appiumFakeDriver = require('appium-fake-driver');

var _appiumAndroidDriver = require('appium-android-driver');

var _appiumIosDriver = require('appium-ios-driver');

var _appiumUiautomator2Driver = require('appium-uiautomator2-driver');

var _appiumSelendroidDriver = require('appium-selendroid-driver');

var _appiumXcuitestDriver = require('appium-xcuitest-driver');

var _appiumYouiengineDriver = require('appium-youiengine-driver');

var _appiumWindowsDriver = require('appium-windows-driver');

var _appiumMacDriver = require('appium-mac-driver');

var _appiumEspressoDriver = require('appium-espresso-driver');

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _asyncLock = require('async-lock');

var _asyncLock2 = _interopRequireDefault(_asyncLock);

var sessionsListGuard = new _asyncLock2['default']();
var pendingDriversGuard = new _asyncLock2['default']();

var AppiumDriver = (function (_BaseDriver) {
  _inherits(AppiumDriver, _BaseDriver);

  function AppiumDriver(args) {
    _classCallCheck(this, AppiumDriver);

    _get(Object.getPrototypeOf(AppiumDriver.prototype), 'constructor', this).call(this);

    // the main Appium Driver has no new command timeout
    this.newCommandTimeoutMs = 0;

    this.args = args;

    // Access to sessions list must be guarded with a Semaphore, because
    // it might be changed by other async calls at any time
    // It is not recommended to access this property directly from the outside
    this.sessions = {};

    // Access to pending drivers list must be guarded with a Semaphore, because
    // it might be changed by other async calls at any time
    // It is not recommended to access this property directly from the outside
    this.pendingDrivers = {};
  }

  // help decide which commands should be proxied to sub-drivers and which
  // should be handled by this, our umbrella driver

  /**
   * Cancel commands queueing for the umbrella Appium driver
   */

  _createClass(AppiumDriver, [{
    key: 'sessionExists',
    value: function sessionExists(sessionId) {
      var dstSession = this.sessions[sessionId];
      return dstSession && dstSession.sessionId !== null;
    }
  }, {
    key: 'driverForSession',
    value: function driverForSession(sessionId) {
      return this.sessions[sessionId];
    }
  }, {
    key: 'getDriverForCaps',
    value: function getDriverForCaps(caps) {
      // TODO if this logic ever becomes complex, should probably factor out
      // into its own file
      if (!caps.platformName || !_lodash2['default'].isString(caps.platformName)) {
        throw new Error("You must include a platformName capability");
      }

      // we don't necessarily have an `automationName` capability,
      if (caps.automationName) {
        if (caps.automationName.toLowerCase() === 'selendroid') {
          // but if we do and it is 'Selendroid', act on it
          return _appiumSelendroidDriver.SelendroidDriver;
        } else if (caps.automationName.toLowerCase() === 'uiautomator2') {
          // but if we do and it is 'Uiautomator2', act on it
          return _appiumUiautomator2Driver.AndroidUiautomator2Driver;
        } else if (caps.automationName.toLowerCase() === 'xcuitest') {
          // but if we do and it is 'XCUITest', act on it
          return _appiumXcuitestDriver.XCUITestDriver;
        } else if (caps.automationName.toLowerCase() === 'youiengine') {
          // but if we do and it is 'YouiEngine', act on it
          return _appiumYouiengineDriver.YouiEngineDriver;
        } else if (caps.automationName.toLowerCase() === 'espresso') {
          _logger2['default'].warn('The Appium Espresso driver is currently in early beta and meant only for experimental usage. Its API is not yet complete or guaranteed to work. Please report bugs to the Appium team on GitHub.');
          return _appiumEspressoDriver.EspressoDriver;
        }
      }

      if (caps.platformName.toLowerCase() === "fake") {
        return _appiumFakeDriver.FakeDriver;
      }

      if (caps.platformName.toLowerCase() === 'android') {
        return _appiumAndroidDriver.AndroidDriver;
      }

      if (caps.platformName.toLowerCase() === 'ios') {
        if (caps.platformVersion) {
          var majorVer = caps.platformVersion.toString().split(".")[0];
          if (parseInt(majorVer, 10) >= 10) {
            _logger2['default'].info("Requested iOS support with version >= 10, using XCUITest " + "driver instead of UIAutomation-based driver, since the " + "latter is unsupported on iOS 10 and up.");
            return _appiumXcuitestDriver.XCUITestDriver;
          }
        }

        return _appiumIosDriver.IosDriver;
      }

      if (caps.platformName.toLowerCase() === 'windows') {
        return _appiumWindowsDriver.WindowsDriver;
      }

      if (caps.platformName.toLowerCase() === 'mac') {
        return _appiumMacDriver.MacDriver;
      }

      var msg = undefined;
      if (caps.automationName) {
        msg = 'Could not find a driver for automationName \'' + caps.automationName + '\' and platformName ' + ('\'' + caps.platformName + '\'.');
      } else {
        msg = 'Could not find a driver for platformName \'' + caps.platformName + '\'.';
      }
      throw new Error(msg + ' Please check your desired capabilities.');
    }
  }, {
    key: 'getDriverVersion',
    value: function getDriverVersion(driver) {
      var NAME_DRIVER_MAP = {
        SelendroidDriver: 'appium-selendroid-driver',
        AndroidUiautomator2Driver: 'appium-uiautomator2-driver',
        XCUITestDriver: 'appium-xcuitest-driver',
        YouiEngineDriver: 'appium-youiengine-driver',
        FakeDriver: 'appium-fake-driver',
        AndroidDriver: 'appium-android-driver',
        IosDriver: 'appium-ios-driver',
        WindowsDriver: 'appium-windows-driver',
        MacDriver: 'appium-mac-driver'
      };
      if (!NAME_DRIVER_MAP[driver.name]) {
        _logger2['default'].warn('Unable to get version of driver \'' + driver.name + '\'');
        return;
      }

      var _require = require(NAME_DRIVER_MAP[driver.name] + '/package.json');

      var version = _require.version;

      return version;
    }
  }, {
    key: 'getStatus',
    value: function getStatus() {
      var config, gitSha, status;
      return _regeneratorRuntime.async(function getStatus$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return _regeneratorRuntime.awrap((0, _config.getAppiumConfig)());

          case 2:
            config = context$2$0.sent;
            gitSha = config['git-sha'];
            status = { build: { version: config.version } };

            if (typeof gitSha !== "undefined") {
              status.build.revision = gitSha;
            }
            return context$2$0.abrupt('return', status);

          case 7:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }, {
    key: 'getSessions',
    value: function getSessions() {
      var sessions;
      return _regeneratorRuntime.async(function getSessions$(context$2$0) {
        var _this = this;

        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return _regeneratorRuntime.awrap(sessionsListGuard.acquire(AppiumDriver.name, function () {
              return _this.sessions;
            }));

          case 2:
            sessions = context$2$0.sent;
            return context$2$0.abrupt('return', _lodash2['default'].toPairs(sessions).map(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2);

              var id = _ref2[0];
              var driver = _ref2[1];

              return { id: id, capabilities: driver.caps };
            }));

          case 4:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }, {
    key: 'printNewSessionAnnouncement',
    value: function printNewSessionAnnouncement(driver, caps) {
      var driverVersion = this.getDriverVersion(driver);
      var introString = driverVersion ? 'Creating new ' + driver.name + ' (v' + driverVersion + ') session' : 'Creating new ' + driver.name + ' session';
      _logger2['default'].info(introString);
      _logger2['default'].info('Capabilities:');
      _util2['default'].inspect(caps);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _getIterator(_lodash2['default'].toPairs(caps)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2);

          var cap = _step$value[0];
          var value = _step$value[1];

          _logger2['default'].info('  ' + cap + ': ' + _util2['default'].inspect(value));
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
  }, {
    key: 'createSession',
    value: function createSession(caps, reqCaps) {
      var InnerDriver, sessionIdsToDelete, runningDriversData, otherPendingDriversData, d, innerSessionId, dCaps, _ref3, _ref32;

      return _regeneratorRuntime.async(function createSession$(context$2$0) {
        var _this2 = this;

        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            caps = _lodash2['default'].defaults(_lodash2['default'].clone(caps), this.args.defaultCapabilities);
            // InnerDriver is AndroidDriver class
            InnerDriver = this.getDriverForCaps(caps);

            this.printNewSessionAnnouncement(InnerDriver, caps);

            // default false

            if (!this.args.sessionOverride) {
              context$2$0.next = 16;
              break;
            }

            context$2$0.next = 6;
            return _regeneratorRuntime.awrap(sessionsListGuard.acquire(AppiumDriver.name, function () {
              return _lodash2['default'].keys(_this2.sessions);
            }));

          case 6:
            sessionIdsToDelete = context$2$0.sent;

            if (!sessionIdsToDelete.length) {
              context$2$0.next = 16;
              break;
            }

            _logger2['default'].info('Session override is on. Deleting other ' + sessionIdsToDelete.length + ' active session' + (sessionIdsToDelete.length ? '' : 's') + '.');
            context$2$0.prev = 9;
            context$2$0.next = 12;
            return _regeneratorRuntime.awrap(_bluebird2['default'].map(sessionIdsToDelete, function (id) {
              return _this2.deleteSession(id);
            }));

          case 12:
            context$2$0.next = 16;
            break;

          case 14:
            context$2$0.prev = 14;
            context$2$0.t0 = context$2$0['catch'](9);

          case 16:
            runningDriversData = undefined, otherPendingDriversData = undefined;
            d = new InnerDriver(this.args);
            context$2$0.prev = 18;
            context$2$0.next = 21;
            return _regeneratorRuntime.awrap(this.curSessionDataForDriver(InnerDriver));

          case 21:
            runningDriversData = context$2$0.sent;
            context$2$0.next = 27;
            break;

          case 24:
            context$2$0.prev = 24;
            context$2$0.t1 = context$2$0['catch'](18);
            throw new _appiumBaseDriver.errors.SessionNotCreatedError(context$2$0.t1.message);

          case 27:
            context$2$0.next = 29;
            return _regeneratorRuntime.awrap(pendingDriversGuard.acquire(AppiumDriver.name, function () {
              // []
              _this2.pendingDrivers[InnerDriver.name] = _this2.pendingDrivers[InnerDriver.name] || [];
              otherPendingDriversData = _this2.pendingDrivers[InnerDriver.name].map(function (drv) {
                return drv.driverData;
              });
              _this2.pendingDrivers[InnerDriver.name].push(d);
            }));

          case 29:
            innerSessionId = undefined, dCaps = undefined;
            context$2$0.prev = 30;
            context$2$0.next = 33;
            return _regeneratorRuntime.awrap(d.createSession(caps, reqCaps, [].concat(_toConsumableArray(runningDriversData), _toConsumableArray(otherPendingDriversData))));

          case 33:
            _ref3 = context$2$0.sent;
            _ref32 = _slicedToArray(_ref3, 2);
            innerSessionId = _ref32[0];
            dCaps = _ref32[1];
            context$2$0.next = 39;
            return _regeneratorRuntime.awrap(sessionsListGuard.acquire(AppiumDriver.name, function () {
              _this2.sessions[innerSessionId] = d;
            }));

          case 39:
            context$2$0.prev = 39;
            context$2$0.next = 42;
            return _regeneratorRuntime.awrap(pendingDriversGuard.acquire(AppiumDriver.name, function () {
              _lodash2['default'].pull(_this2.pendingDrivers[InnerDriver.name], d);
            }));

          case 42:
            return context$2$0.finish(39);

          case 43:

            // this is an async function but we don't await it because it handles
            // an out-of-band promise which is fulfilled if the inner driver
            // unexpectedly shuts down
            this.attachUnexpectedShutdownHandler(d, innerSessionId);

            _logger2['default'].info('New ' + InnerDriver.name + ' session created successfully, session ' + (innerSessionId + ' added to master session list'));

            // set the New Command Timeout for the inner driver
            d.startNewCommandTimeout();

            return context$2$0.abrupt('return', [innerSessionId, dCaps]);

          case 47:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this, [[9, 14], [18, 24], [30,, 39, 43]]);
    }
  }, {
    key: 'attachUnexpectedShutdownHandler',
    value: function attachUnexpectedShutdownHandler(driver, innerSessionId) {
      return _regeneratorRuntime.async(function attachUnexpectedShutdownHandler$(context$2$0) {
        var _this3 = this;

        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.prev = 0;
            context$2$0.next = 3;
            return _regeneratorRuntime.awrap(driver.onUnexpectedShutdown);

          case 3:
            throw new Error('Unexpected shutdown');

          case 6:
            context$2$0.prev = 6;
            context$2$0.t0 = context$2$0['catch'](0);

            if (!(context$2$0.t0 instanceof _bluebird2['default'].CancellationError)) {
              context$2$0.next = 10;
              break;
            }

            return context$2$0.abrupt('return');

          case 10:
            _logger2['default'].warn('Closing session, cause was \'' + context$2$0.t0.message + '\'');
            _logger2['default'].info('Removing session ' + innerSessionId + ' from our master session list');
            context$2$0.next = 14;
            return _regeneratorRuntime.awrap(sessionsListGuard.acquire(AppiumDriver.name, function () {
              delete _this3.sessions[innerSessionId];
            }));

          case 14:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this, [[0, 6]]);
    }
  }, {
    key: 'curSessionDataForDriver',
    value: function curSessionDataForDriver(InnerDriver) {
      var sessions, data, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, datum;

      return _regeneratorRuntime.async(function curSessionDataForDriver$(context$2$0) {
        var _this4 = this;

        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.next = 2;
            return _regeneratorRuntime.awrap(sessionsListGuard.acquire(AppiumDriver.name, function () {
              return _this4.sessions;
            }));

          case 2:
            sessions = context$2$0.sent;

            _logger2['default'].info("sessionsDataForDriver:", sessions);
            data = _lodash2['default'].values(sessions).filter(function (s) {
              return s.constructor.name === InnerDriver.name;
            }).map(function (s) {
              return s.driverData;
            });
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            context$2$0.prev = 8;
            _iterator2 = _getIterator(data);

          case 10:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              context$2$0.next = 17;
              break;
            }

            datum = _step2.value;

            if (datum) {
              context$2$0.next = 14;
              break;
            }

            throw new Error('Problem getting session data for driver type ' + (InnerDriver.name + '; does it implement \'get ') + 'driverData\'?');

          case 14:
            _iteratorNormalCompletion2 = true;
            context$2$0.next = 10;
            break;

          case 17:
            context$2$0.next = 23;
            break;

          case 19:
            context$2$0.prev = 19;
            context$2$0.t0 = context$2$0['catch'](8);
            _didIteratorError2 = true;
            _iteratorError2 = context$2$0.t0;

          case 23:
            context$2$0.prev = 23;
            context$2$0.prev = 24;

            if (!_iteratorNormalCompletion2 && _iterator2['return']) {
              _iterator2['return']();
            }

          case 26:
            context$2$0.prev = 26;

            if (!_didIteratorError2) {
              context$2$0.next = 29;
              break;
            }

            throw _iteratorError2;

          case 29:
            return context$2$0.finish(26);

          case 30:
            return context$2$0.finish(23);

          case 31:
            return context$2$0.abrupt('return', data);

          case 32:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this, [[8, 19, 23, 31], [24,, 26, 30]]);
    }
  }, {
    key: 'deleteSession',
    value: function deleteSession(sessionId) {
      var otherSessionsData, dstSession;
      return _regeneratorRuntime.async(function deleteSession$(context$2$0) {
        var _this5 = this;

        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            context$2$0.prev = 0;
            otherSessionsData = null;
            dstSession = null;
            context$2$0.next = 5;
            return _regeneratorRuntime.awrap(sessionsListGuard.acquire(AppiumDriver.name, function () {
              if (!_this5.sessions[sessionId]) {
                return;
              }
              var curConstructorName = _this5.sessions[sessionId].constructor.name;
              otherSessionsData = _lodash2['default'].toPairs(_this5.sessions).filter(function (_ref4) {
                var _ref42 = _slicedToArray(_ref4, 2);

                var key = _ref42[0];
                var value = _ref42[1];
                return value.constructor.name === curConstructorName && key !== sessionId;
              }).map(function (_ref5) {
                var _ref52 = _slicedToArray(_ref5, 2);

                var value = _ref52[1];
                return value.driverData;
              });
              dstSession = _this5.sessions[sessionId];
              _logger2['default'].info('Removing session ' + sessionId + ' from our master session list');
              // regardless of whether the deleteSession completes successfully or not
              // make the session unavailable, because who knows what state it might
              // be in otherwise
              delete _this5.sessions[sessionId];
            }));

          case 5:
            context$2$0.next = 7;
            return _regeneratorRuntime.awrap(dstSession.deleteSession(sessionId, otherSessionsData));

          case 7:
            context$2$0.next = 13;
            break;

          case 9:
            context$2$0.prev = 9;
            context$2$0.t0 = context$2$0['catch'](0);

            _logger2['default'].error('Had trouble ending session ' + sessionId + ': ' + context$2$0.t0.message);
            throw context$2$0.t0;

          case 13:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this, [[0, 9]]);
    }
  }, {
    key: 'executeCommand',
    value: function executeCommand(cmd) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var _get2, sessionId, dstSession;

      return _regeneratorRuntime.async(function executeCommand$(context$2$0) {
        var _this6 = this;

        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            if (!(cmd === 'getStatus')) {
              context$2$0.next = 4;
              break;
            }

            context$2$0.next = 3;
            return _regeneratorRuntime.awrap(this.getStatus());

          case 3:
            return context$2$0.abrupt('return', context$2$0.sent);

          case 4:
            if (!isAppiumDriverCommand(cmd)) {
              context$2$0.next = 6;
              break;
            }

            return context$2$0.abrupt('return', (_get2 = _get(Object.getPrototypeOf(AppiumDriver.prototype), 'executeCommand', this)).call.apply(_get2, [this, cmd].concat(args)));

          case 6:
            sessionId = _lodash2['default'].last(args);
            context$2$0.next = 9;
            return _regeneratorRuntime.awrap(sessionsListGuard.acquire(AppiumDriver.name, function () {
              return _this6.sessions[sessionId];
            }));

          case 9:
            dstSession = context$2$0.sent;

            if (dstSession) {
              context$2$0.next = 12;
              break;
            }

            throw new Error('The session with id \'' + sessionId + '\' does not exist');

          case 12:
            return context$2$0.abrupt('return', dstSession.executeCommand.apply(dstSession, [cmd].concat(args)));

          case 13:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }, {
    key: 'proxyActive',
    value: function proxyActive(sessionId) {
      var dstSession = this.sessions[sessionId];
      return dstSession && _lodash2['default'].isFunction(dstSession.proxyActive) && dstSession.proxyActive(sessionId);
    }
  }, {
    key: 'getProxyAvoidList',
    value: function getProxyAvoidList(sessionId) {
      var dstSession = this.sessions[sessionId];
      return dstSession ? dstSession.getProxyAvoidList() : [];
    }
  }, {
    key: 'canProxy',
    value: function canProxy(sessionId) {
      var dstSession = this.sessions[sessionId];
      return dstSession && dstSession.canProxy(sessionId);
    }
  }, {
    key: 'isCommandsQueueEnabled',
    get: function get() {
      return false;
    }
  }]);

  return AppiumDriver;
})(_appiumBaseDriver.BaseDriver);

function isAppiumDriverCommand(cmd) {
  return !(0, _appiumBaseDriver.isSessionCommand)(cmd) || cmd === "deleteSession";
}

function getAppiumRouter(args) {
  var appium = new AppiumDriver(args);
  return (0, _appiumBaseDriver.routeConfiguringFunction)(appium);
}

exports.AppiumDriver = AppiumDriver;
exports.getAppiumRouter = getAppiumRouter;
exports['default'] = getAppiumRouter;

// runningDriversData: []

//log.info("runningDriversData:", runningDriversData)

// { 'AndroidDirver': AndroidDriver instance }
//log.info("pendingDrivers:", this.pendingDrivers)

// Remove the session on unexpected shutdown, so that we are in a position
// to open another session later on.
// TODO: this should be removed and replaced by a onShutdown callback.
// this is a cancellable promise
// if we get here, we've had an unexpected shutdown, so error

// if we cancelled the unexpected shutdown promise, that means we
// no longer care about it, and can safely ignore it

// acquire：确保并发的时候，只有一个可以执行 () => this.sessions函数
// sessions: {}

// getStatus command should not be put into queue. If we do it as part of super.executeCommand, it will be added to queue.
// There will be lot of status commands in queue during createSession command, as createSession can take up to or more than a minute.
//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUMsU0FBUyxDQUFDLENBQUM7S0FDaEc7OztXQUVpQiwyQkFBQyxTQUFTLEVBQUU7QUFDNUIsVUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QyxhQUFPLFVBQVUsR0FBRyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLENBQUM7S0FDekQ7OztXQUVRLGtCQUFDLFNBQVMsRUFBRTtBQUNuQixVQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzVDLGFBQU8sVUFBVSxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDckQ7OztTQXBTMEIsZUFBRztBQUM1QixhQUFPLEtBQUssQ0FBQztLQUNkOzs7U0F6QkcsWUFBWTs7O0FBZ1VsQixTQUFTLHFCQUFxQixDQUFFLEdBQUcsRUFBRTtBQUNuQyxTQUFPLENBQUMsd0NBQWlCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsS0FBSyxlQUFlLENBQUM7Q0FDMUQ7O0FBRUQsU0FBUyxlQUFlLENBQUUsSUFBSSxFQUFFO0FBQzlCLE1BQUksTUFBTSxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BDLFNBQU8sZ0RBQXlCLE1BQU0sQ0FBQyxDQUFDO0NBQ3pDOztRQUVRLFlBQVksR0FBWixZQUFZO1FBQUUsZUFBZSxHQUFmLGVBQWU7cUJBQ3ZCLGVBQWUiLCJmaWxlIjoibGliL2FwcGl1bS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbG9nIGZyb20gJy4vbG9nZ2VyJztcbmltcG9ydCB7IGdldEFwcGl1bUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IEJhc2VEcml2ZXIsIHJvdXRlQ29uZmlndXJpbmdGdW5jdGlvbiwgZXJyb3JzLFxuICAgICAgICAgaXNTZXNzaW9uQ29tbWFuZCB9IGZyb20gJ2FwcGl1bS1iYXNlLWRyaXZlcic7XG5pbXBvcnQgeyBGYWtlRHJpdmVyIH0gZnJvbSAnYXBwaXVtLWZha2UtZHJpdmVyJztcbmltcG9ydCB7IEFuZHJvaWREcml2ZXIgfSBmcm9tICdhcHBpdW0tYW5kcm9pZC1kcml2ZXInO1xuaW1wb3J0IHsgSW9zRHJpdmVyIH0gZnJvbSAnYXBwaXVtLWlvcy1kcml2ZXInO1xuaW1wb3J0IHsgQW5kcm9pZFVpYXV0b21hdG9yMkRyaXZlciB9IGZyb20gJ2FwcGl1bS11aWF1dG9tYXRvcjItZHJpdmVyJztcbmltcG9ydCB7IFNlbGVuZHJvaWREcml2ZXIgfSBmcm9tICdhcHBpdW0tc2VsZW5kcm9pZC1kcml2ZXInO1xuaW1wb3J0IHsgWENVSVRlc3REcml2ZXIgfSBmcm9tICdhcHBpdW0teGN1aXRlc3QtZHJpdmVyJztcbmltcG9ydCB7IFlvdWlFbmdpbmVEcml2ZXIgfSBmcm9tICdhcHBpdW0teW91aWVuZ2luZS1kcml2ZXInO1xuaW1wb3J0IHsgV2luZG93c0RyaXZlciB9IGZyb20gJ2FwcGl1bS13aW5kb3dzLWRyaXZlcic7XG5pbXBvcnQgeyBNYWNEcml2ZXIgfSBmcm9tICdhcHBpdW0tbWFjLWRyaXZlcic7XG5pbXBvcnQgeyBFc3ByZXNzb0RyaXZlciB9IGZyb20gJ2FwcGl1bS1lc3ByZXNzby1kcml2ZXInO1xuaW1wb3J0IEIgZnJvbSAnYmx1ZWJpcmQnO1xuaW1wb3J0IHV0aWwgZnJvbSAndXRpbCc7XG5pbXBvcnQgQXN5bmNMb2NrIGZyb20gJ2FzeW5jLWxvY2snO1xuXG5cbmNvbnN0IHNlc3Npb25zTGlzdEd1YXJkID0gbmV3IEFzeW5jTG9jaygpO1xuY29uc3QgcGVuZGluZ0RyaXZlcnNHdWFyZCA9IG5ldyBBc3luY0xvY2soKTtcblxuY2xhc3MgQXBwaXVtRHJpdmVyIGV4dGVuZHMgQmFzZURyaXZlciB7XG4gIGNvbnN0cnVjdG9yIChhcmdzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIHRoZSBtYWluIEFwcGl1bSBEcml2ZXIgaGFzIG5vIG5ldyBjb21tYW5kIHRpbWVvdXRcbiAgICB0aGlzLm5ld0NvbW1hbmRUaW1lb3V0TXMgPSAwO1xuXG4gICAgdGhpcy5hcmdzID0gYXJncztcblxuICAgIC8vIEFjY2VzcyB0byBzZXNzaW9ucyBsaXN0IG11c3QgYmUgZ3VhcmRlZCB3aXRoIGEgU2VtYXBob3JlLCBiZWNhdXNlXG4gICAgLy8gaXQgbWlnaHQgYmUgY2hhbmdlZCBieSBvdGhlciBhc3luYyBjYWxscyBhdCBhbnkgdGltZVxuICAgIC8vIEl0IGlzIG5vdCByZWNvbW1lbmRlZCB0byBhY2Nlc3MgdGhpcyBwcm9wZXJ0eSBkaXJlY3RseSBmcm9tIHRoZSBvdXRzaWRlXG4gICAgdGhpcy5zZXNzaW9ucyA9IHt9O1xuXG4gICAgLy8gQWNjZXNzIHRvIHBlbmRpbmcgZHJpdmVycyBsaXN0IG11c3QgYmUgZ3VhcmRlZCB3aXRoIGEgU2VtYXBob3JlLCBiZWNhdXNlXG4gICAgLy8gaXQgbWlnaHQgYmUgY2hhbmdlZCBieSBvdGhlciBhc3luYyBjYWxscyBhdCBhbnkgdGltZVxuICAgIC8vIEl0IGlzIG5vdCByZWNvbW1lbmRlZCB0byBhY2Nlc3MgdGhpcyBwcm9wZXJ0eSBkaXJlY3RseSBmcm9tIHRoZSBvdXRzaWRlXG4gICAgdGhpcy5wZW5kaW5nRHJpdmVycyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIENhbmNlbCBjb21tYW5kcyBxdWV1ZWluZyBmb3IgdGhlIHVtYnJlbGxhIEFwcGl1bSBkcml2ZXJcbiAgICovXG4gIGdldCBpc0NvbW1hbmRzUXVldWVFbmFibGVkICgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzZXNzaW9uRXhpc3RzIChzZXNzaW9uSWQpIHtcbiAgICBjb25zdCBkc3RTZXNzaW9uID0gdGhpcy5zZXNzaW9uc1tzZXNzaW9uSWRdO1xuICAgIHJldHVybiBkc3RTZXNzaW9uICYmIGRzdFNlc3Npb24uc2Vzc2lvbklkICE9PSBudWxsO1xuICB9XG5cbiAgZHJpdmVyRm9yU2Vzc2lvbiAoc2Vzc2lvbklkKSB7XG4gICAgcmV0dXJuIHRoaXMuc2Vzc2lvbnNbc2Vzc2lvbklkXTtcbiAgfVxuXG4gIGdldERyaXZlckZvckNhcHMgKGNhcHMpIHtcbiAgICAvLyBUT0RPIGlmIHRoaXMgbG9naWMgZXZlciBiZWNvbWVzIGNvbXBsZXgsIHNob3VsZCBwcm9iYWJseSBmYWN0b3Igb3V0XG4gICAgLy8gaW50byBpdHMgb3duIGZpbGVcbiAgICBpZiAoIWNhcHMucGxhdGZvcm1OYW1lIHx8ICFfLmlzU3RyaW5nKGNhcHMucGxhdGZvcm1OYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgaW5jbHVkZSBhIHBsYXRmb3JtTmFtZSBjYXBhYmlsaXR5XCIpO1xuICAgIH1cblxuICAgIC8vIHdlIGRvbid0IG5lY2Vzc2FyaWx5IGhhdmUgYW4gYGF1dG9tYXRpb25OYW1lYCBjYXBhYmlsaXR5LFxuICAgIGlmIChjYXBzLmF1dG9tYXRpb25OYW1lKSB7XG4gICAgICBpZiAoY2Fwcy5hdXRvbWF0aW9uTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc2VsZW5kcm9pZCcpIHtcbiAgICAgICAgLy8gYnV0IGlmIHdlIGRvIGFuZCBpdCBpcyAnU2VsZW5kcm9pZCcsIGFjdCBvbiBpdFxuICAgICAgICByZXR1cm4gU2VsZW5kcm9pZERyaXZlcjtcbiAgICAgIH0gZWxzZSBpZiAoY2Fwcy5hdXRvbWF0aW9uTmFtZS50b0xvd2VyQ2FzZSgpID09PSAndWlhdXRvbWF0b3IyJykge1xuICAgICAgICAvLyBidXQgaWYgd2UgZG8gYW5kIGl0IGlzICdVaWF1dG9tYXRvcjInLCBhY3Qgb24gaXRcbiAgICAgICAgcmV0dXJuIEFuZHJvaWRVaWF1dG9tYXRvcjJEcml2ZXI7XG4gICAgICB9IGVsc2UgaWYgKGNhcHMuYXV0b21hdGlvbk5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3hjdWl0ZXN0Jykge1xuICAgICAgICAvLyBidXQgaWYgd2UgZG8gYW5kIGl0IGlzICdYQ1VJVGVzdCcsIGFjdCBvbiBpdFxuICAgICAgICByZXR1cm4gWENVSVRlc3REcml2ZXI7XG4gICAgICB9IGVsc2UgaWYgKGNhcHMuYXV0b21hdGlvbk5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3lvdWllbmdpbmUnKSB7XG4gICAgICAgIC8vIGJ1dCBpZiB3ZSBkbyBhbmQgaXQgaXMgJ1lvdWlFbmdpbmUnLCBhY3Qgb24gaXRcbiAgICAgICAgcmV0dXJuIFlvdWlFbmdpbmVEcml2ZXI7XG4gICAgICB9IGVsc2UgaWYgKGNhcHMuYXV0b21hdGlvbk5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2VzcHJlc3NvJykge1xuICAgICAgICBsb2cud2FybignVGhlIEFwcGl1bSBFc3ByZXNzbyBkcml2ZXIgaXMgY3VycmVudGx5IGluIGVhcmx5IGJldGEgYW5kIG1lYW50IG9ubHkgZm9yIGV4cGVyaW1lbnRhbCB1c2FnZS4gSXRzIEFQSSBpcyBub3QgeWV0IGNvbXBsZXRlIG9yIGd1YXJhbnRlZWQgdG8gd29yay4gUGxlYXNlIHJlcG9ydCBidWdzIHRvIHRoZSBBcHBpdW0gdGVhbSBvbiBHaXRIdWIuJyk7XG4gICAgICAgIHJldHVybiBFc3ByZXNzb0RyaXZlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2Fwcy5wbGF0Zm9ybU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJmYWtlXCIpIHtcbiAgICAgIHJldHVybiBGYWtlRHJpdmVyO1xuICAgIH1cblxuICAgIGlmIChjYXBzLnBsYXRmb3JtTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnYW5kcm9pZCcpIHtcbiAgICAgIHJldHVybiBBbmRyb2lkRHJpdmVyO1xuICAgIH1cblxuICAgIGlmIChjYXBzLnBsYXRmb3JtTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW9zJykge1xuICAgICAgaWYgKGNhcHMucGxhdGZvcm1WZXJzaW9uKSB7XG4gICAgICAgIGxldCBtYWpvclZlciA9IGNhcHMucGxhdGZvcm1WZXJzaW9uLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzBdO1xuICAgICAgICBpZiAocGFyc2VJbnQobWFqb3JWZXIsIDEwKSA+PSAxMCkge1xuICAgICAgICAgIGxvZy5pbmZvKFwiUmVxdWVzdGVkIGlPUyBzdXBwb3J0IHdpdGggdmVyc2lvbiA+PSAxMCwgdXNpbmcgWENVSVRlc3QgXCIgK1xuICAgICAgICAgICAgICAgICAgIFwiZHJpdmVyIGluc3RlYWQgb2YgVUlBdXRvbWF0aW9uLWJhc2VkIGRyaXZlciwgc2luY2UgdGhlIFwiICtcbiAgICAgICAgICAgICAgICAgICBcImxhdHRlciBpcyB1bnN1cHBvcnRlZCBvbiBpT1MgMTAgYW5kIHVwLlwiKTtcbiAgICAgICAgICByZXR1cm4gWENVSVRlc3REcml2ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIElvc0RyaXZlcjtcbiAgICB9XG5cbiAgICBpZiAoY2Fwcy5wbGF0Zm9ybU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3dpbmRvd3MnKSB7XG4gICAgICByZXR1cm4gV2luZG93c0RyaXZlcjtcbiAgICB9XG5cbiAgICBpZiAoY2Fwcy5wbGF0Zm9ybU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ21hYycpIHtcbiAgICAgIHJldHVybiBNYWNEcml2ZXI7XG4gICAgfVxuXG4gICAgbGV0IG1zZztcbiAgICBpZiAoY2Fwcy5hdXRvbWF0aW9uTmFtZSkge1xuICAgICAgbXNnID0gYENvdWxkIG5vdCBmaW5kIGEgZHJpdmVyIGZvciBhdXRvbWF0aW9uTmFtZSAnJHtjYXBzLmF1dG9tYXRpb25OYW1lfScgYW5kIHBsYXRmb3JtTmFtZSBgICtcbiAgICAgICAgICAgIGAnJHtjYXBzLnBsYXRmb3JtTmFtZX0nLmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1zZyA9IGBDb3VsZCBub3QgZmluZCBhIGRyaXZlciBmb3IgcGxhdGZvcm1OYW1lICcke2NhcHMucGxhdGZvcm1OYW1lfScuYDtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGAke21zZ30gUGxlYXNlIGNoZWNrIHlvdXIgZGVzaXJlZCBjYXBhYmlsaXRpZXMuYCk7XG4gIH1cblxuICBnZXREcml2ZXJWZXJzaW9uIChkcml2ZXIpIHtcbiAgICBjb25zdCBOQU1FX0RSSVZFUl9NQVAgPSB7XG4gICAgICBTZWxlbmRyb2lkRHJpdmVyOiAnYXBwaXVtLXNlbGVuZHJvaWQtZHJpdmVyJyxcbiAgICAgIEFuZHJvaWRVaWF1dG9tYXRvcjJEcml2ZXI6ICdhcHBpdW0tdWlhdXRvbWF0b3IyLWRyaXZlcicsXG4gICAgICBYQ1VJVGVzdERyaXZlcjogJ2FwcGl1bS14Y3VpdGVzdC1kcml2ZXInLFxuICAgICAgWW91aUVuZ2luZURyaXZlcjogJ2FwcGl1bS15b3VpZW5naW5lLWRyaXZlcicsXG4gICAgICBGYWtlRHJpdmVyOiAnYXBwaXVtLWZha2UtZHJpdmVyJyxcbiAgICAgIEFuZHJvaWREcml2ZXI6ICdhcHBpdW0tYW5kcm9pZC1kcml2ZXInLFxuICAgICAgSW9zRHJpdmVyOiAnYXBwaXVtLWlvcy1kcml2ZXInLFxuICAgICAgV2luZG93c0RyaXZlcjogJ2FwcGl1bS13aW5kb3dzLWRyaXZlcicsXG4gICAgICBNYWNEcml2ZXI6ICdhcHBpdW0tbWFjLWRyaXZlcicsXG4gICAgfTtcbiAgICBpZiAoIU5BTUVfRFJJVkVSX01BUFtkcml2ZXIubmFtZV0pIHtcbiAgICAgIGxvZy53YXJuKGBVbmFibGUgdG8gZ2V0IHZlcnNpb24gb2YgZHJpdmVyICcke2RyaXZlci5uYW1lfSdgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHt2ZXJzaW9ufSA9IHJlcXVpcmUoYCR7TkFNRV9EUklWRVJfTUFQW2RyaXZlci5uYW1lXX0vcGFja2FnZS5qc29uYCk7XG4gICAgcmV0dXJuIHZlcnNpb247XG4gIH1cblxuICBhc3luYyBnZXRTdGF0dXMgKCkge1xuICAgIGxldCBjb25maWcgPSBhd2FpdCBnZXRBcHBpdW1Db25maWcoKTtcbiAgICBsZXQgZ2l0U2hhID0gY29uZmlnWydnaXQtc2hhJ107XG4gICAgbGV0IHN0YXR1cyA9IHtidWlsZDoge3ZlcnNpb246IGNvbmZpZy52ZXJzaW9ufX07XG4gICAgaWYgKHR5cGVvZiBnaXRTaGEgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHN0YXR1cy5idWlsZC5yZXZpc2lvbiA9IGdpdFNoYTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXR1cztcbiAgfVxuXG4gIGFzeW5jIGdldFNlc3Npb25zICgpIHtcbiAgICBjb25zdCBzZXNzaW9ucyA9IGF3YWl0IHNlc3Npb25zTGlzdEd1YXJkLmFjcXVpcmUoQXBwaXVtRHJpdmVyLm5hbWUsICgpID0+IHRoaXMuc2Vzc2lvbnMpO1xuICAgIHJldHVybiBfLnRvUGFpcnMoc2Vzc2lvbnMpXG4gICAgICAgIC5tYXAoKFtpZCwgZHJpdmVyXSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7aWQsIGNhcGFiaWxpdGllczogZHJpdmVyLmNhcHN9O1xuICAgICAgICB9KTtcbiAgfVxuXG4gIHByaW50TmV3U2Vzc2lvbkFubm91bmNlbWVudCAoZHJpdmVyLCBjYXBzKSB7XG4gICAgbGV0IGRyaXZlclZlcnNpb24gPSB0aGlzLmdldERyaXZlclZlcnNpb24oZHJpdmVyKTtcbiAgICBsZXQgaW50cm9TdHJpbmcgPSBkcml2ZXJWZXJzaW9uID9cbiAgICAgIGBDcmVhdGluZyBuZXcgJHtkcml2ZXIubmFtZX0gKHYke2RyaXZlclZlcnNpb259KSBzZXNzaW9uYCA6XG4gICAgICBgQ3JlYXRpbmcgbmV3ICR7ZHJpdmVyLm5hbWV9IHNlc3Npb25gO1xuICAgIGxvZy5pbmZvKGludHJvU3RyaW5nKTtcbiAgICBsb2cuaW5mbygnQ2FwYWJpbGl0aWVzOicpO1xuICAgIHV0aWwuaW5zcGVjdChjYXBzKTtcbiAgICBmb3IgKGxldCBbY2FwLCB2YWx1ZV0gb2YgXy50b1BhaXJzKGNhcHMpKSB7XG4gICAgICBsb2cuaW5mbyhgICAke2NhcH06ICR7dXRpbC5pbnNwZWN0KHZhbHVlKX1gKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBjcmVhdGVTZXNzaW9uIChjYXBzLCByZXFDYXBzKSB7XG4gICAgY2FwcyA9IF8uZGVmYXVsdHMoXy5jbG9uZShjYXBzKSwgdGhpcy5hcmdzLmRlZmF1bHRDYXBhYmlsaXRpZXMpO1xuICAgIC8vIElubmVyRHJpdmVyIGlzIEFuZHJvaWREcml2ZXIgY2xhc3NcbiAgICBsZXQgSW5uZXJEcml2ZXIgPSB0aGlzLmdldERyaXZlckZvckNhcHMoY2Fwcyk7XG4gICAgdGhpcy5wcmludE5ld1Nlc3Npb25Bbm5vdW5jZW1lbnQoSW5uZXJEcml2ZXIsIGNhcHMpO1xuXG4gICAgLy8gZGVmYXVsdCBmYWxzZVxuICAgIGlmICh0aGlzLmFyZ3Muc2Vzc2lvbk92ZXJyaWRlKSB7XG4gICAgICBjb25zdCBzZXNzaW9uSWRzVG9EZWxldGUgPSBhd2FpdCBzZXNzaW9uc0xpc3RHdWFyZC5hY3F1aXJlKEFwcGl1bURyaXZlci5uYW1lLCAoKSA9PiBfLmtleXModGhpcy5zZXNzaW9ucykpO1xuICAgICAgaWYgKHNlc3Npb25JZHNUb0RlbGV0ZS5sZW5ndGgpIHtcbiAgICAgICAgbG9nLmluZm8oYFNlc3Npb24gb3ZlcnJpZGUgaXMgb24uIERlbGV0aW5nIG90aGVyICR7c2Vzc2lvbklkc1RvRGVsZXRlLmxlbmd0aH0gYWN0aXZlIHNlc3Npb24ke3Nlc3Npb25JZHNUb0RlbGV0ZS5sZW5ndGggPyAnJyA6ICdzJ30uYCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgQi5tYXAoc2Vzc2lvbklkc1RvRGVsZXRlLCAoaWQpID0+IHRoaXMuZGVsZXRlU2Vzc2lvbihpZCkpO1xuICAgICAgICB9IGNhdGNoIChpZ24pIHt9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHJ1bm5pbmdEcml2ZXJzRGF0YSwgb3RoZXJQZW5kaW5nRHJpdmVyc0RhdGE7XG4gICAgbGV0IGQgPSBuZXcgSW5uZXJEcml2ZXIodGhpcy5hcmdzKTtcbiAgICB0cnkge1xuICAgICAgLy8gcnVubmluZ0RyaXZlcnNEYXRhOiBbXVxuICAgICAgcnVubmluZ0RyaXZlcnNEYXRhID0gYXdhaXQgdGhpcy5jdXJTZXNzaW9uRGF0YUZvckRyaXZlcihJbm5lckRyaXZlcik7XG4gICAgICAvL2xvZy5pbmZvKFwicnVubmluZ0RyaXZlcnNEYXRhOlwiLCBydW5uaW5nRHJpdmVyc0RhdGEpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IGVycm9ycy5TZXNzaW9uTm90Q3JlYXRlZEVycm9yKGUubWVzc2FnZSk7XG4gICAgfVxuICAgIGF3YWl0IHBlbmRpbmdEcml2ZXJzR3VhcmQuYWNxdWlyZShBcHBpdW1Ecml2ZXIubmFtZSwgKCkgPT4ge1xuICAgICAgLy8gW11cbiAgICAgIHRoaXMucGVuZGluZ0RyaXZlcnNbSW5uZXJEcml2ZXIubmFtZV0gPSB0aGlzLnBlbmRpbmdEcml2ZXJzW0lubmVyRHJpdmVyLm5hbWVdIHx8IFtdO1xuICAgICAgb3RoZXJQZW5kaW5nRHJpdmVyc0RhdGEgPSB0aGlzLnBlbmRpbmdEcml2ZXJzW0lubmVyRHJpdmVyLm5hbWVdLm1hcCgoZHJ2KSA9PiBkcnYuZHJpdmVyRGF0YSk7XG4gICAgICB0aGlzLnBlbmRpbmdEcml2ZXJzW0lubmVyRHJpdmVyLm5hbWVdLnB1c2goZCk7XG4gICAgfSk7XG4gICAgLy8geyAnQW5kcm9pZERpcnZlcic6IEFuZHJvaWREcml2ZXIgaW5zdGFuY2UgfVxuICAgIC8vbG9nLmluZm8oXCJwZW5kaW5nRHJpdmVyczpcIiwgdGhpcy5wZW5kaW5nRHJpdmVycylcblxuICAgIGxldCBpbm5lclNlc3Npb25JZCwgZENhcHM7XG4gICAgdHJ5IHtcbiAgICAgIFtpbm5lclNlc3Npb25JZCwgZENhcHNdID0gYXdhaXQgZC5jcmVhdGVTZXNzaW9uKGNhcHMsIHJlcUNhcHMsIFsuLi5ydW5uaW5nRHJpdmVyc0RhdGEsIC4uLm90aGVyUGVuZGluZ0RyaXZlcnNEYXRhXSk7XG5cbiAgICAgIGF3YWl0IHNlc3Npb25zTGlzdEd1YXJkLmFjcXVpcmUoQXBwaXVtRHJpdmVyLm5hbWUsICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXNzaW9uc1tpbm5lclNlc3Npb25JZF0gPSBkO1xuICAgICAgfSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGF3YWl0IHBlbmRpbmdEcml2ZXJzR3VhcmQuYWNxdWlyZShBcHBpdW1Ecml2ZXIubmFtZSwgKCkgPT4ge1xuICAgICAgICBfLnB1bGwodGhpcy5wZW5kaW5nRHJpdmVyc1tJbm5lckRyaXZlci5uYW1lXSwgZCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIGlzIGFuIGFzeW5jIGZ1bmN0aW9uIGJ1dCB3ZSBkb24ndCBhd2FpdCBpdCBiZWNhdXNlIGl0IGhhbmRsZXNcbiAgICAvLyBhbiBvdXQtb2YtYmFuZCBwcm9taXNlIHdoaWNoIGlzIGZ1bGZpbGxlZCBpZiB0aGUgaW5uZXIgZHJpdmVyXG4gICAgLy8gdW5leHBlY3RlZGx5IHNodXRzIGRvd25cbiAgICB0aGlzLmF0dGFjaFVuZXhwZWN0ZWRTaHV0ZG93bkhhbmRsZXIoZCwgaW5uZXJTZXNzaW9uSWQpO1xuXG5cbiAgICBsb2cuaW5mbyhgTmV3ICR7SW5uZXJEcml2ZXIubmFtZX0gc2Vzc2lvbiBjcmVhdGVkIHN1Y2Nlc3NmdWxseSwgc2Vzc2lvbiBgICtcbiAgICAgICAgICAgICBgJHtpbm5lclNlc3Npb25JZH0gYWRkZWQgdG8gbWFzdGVyIHNlc3Npb24gbGlzdGApO1xuXG4gICAgLy8gc2V0IHRoZSBOZXcgQ29tbWFuZCBUaW1lb3V0IGZvciB0aGUgaW5uZXIgZHJpdmVyXG4gICAgZC5zdGFydE5ld0NvbW1hbmRUaW1lb3V0KCk7XG5cbiAgICByZXR1cm4gW2lubmVyU2Vzc2lvbklkLCBkQ2Fwc107XG4gIH1cblxuICBhc3luYyBhdHRhY2hVbmV4cGVjdGVkU2h1dGRvd25IYW5kbGVyIChkcml2ZXIsIGlubmVyU2Vzc2lvbklkKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBzZXNzaW9uIG9uIHVuZXhwZWN0ZWQgc2h1dGRvd24sIHNvIHRoYXQgd2UgYXJlIGluIGEgcG9zaXRpb25cbiAgICAvLyB0byBvcGVuIGFub3RoZXIgc2Vzc2lvbiBsYXRlciBvbi5cbiAgICAvLyBUT0RPOiB0aGlzIHNob3VsZCBiZSByZW1vdmVkIGFuZCByZXBsYWNlZCBieSBhIG9uU2h1dGRvd24gY2FsbGJhY2suXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRyaXZlci5vblVuZXhwZWN0ZWRTaHV0ZG93bjsgLy8gdGhpcyBpcyBhIGNhbmNlbGxhYmxlIHByb21pc2VcbiAgICAgIC8vIGlmIHdlIGdldCBoZXJlLCB3ZSd2ZSBoYWQgYW4gdW5leHBlY3RlZCBzaHV0ZG93biwgc28gZXJyb3JcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBzaHV0ZG93bicpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgQi5DYW5jZWxsYXRpb25FcnJvcikge1xuICAgICAgICAvLyBpZiB3ZSBjYW5jZWxsZWQgdGhlIHVuZXhwZWN0ZWQgc2h1dGRvd24gcHJvbWlzZSwgdGhhdCBtZWFucyB3ZVxuICAgICAgICAvLyBubyBsb25nZXIgY2FyZSBhYm91dCBpdCwgYW5kIGNhbiBzYWZlbHkgaWdub3JlIGl0XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxvZy53YXJuKGBDbG9zaW5nIHNlc3Npb24sIGNhdXNlIHdhcyAnJHtlLm1lc3NhZ2V9J2ApO1xuICAgICAgbG9nLmluZm8oYFJlbW92aW5nIHNlc3Npb24gJHtpbm5lclNlc3Npb25JZH0gZnJvbSBvdXIgbWFzdGVyIHNlc3Npb24gbGlzdGApO1xuICAgICAgYXdhaXQgc2Vzc2lvbnNMaXN0R3VhcmQuYWNxdWlyZShBcHBpdW1Ecml2ZXIubmFtZSwgKCkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZXNzaW9uc1tpbm5lclNlc3Npb25JZF07XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBjdXJTZXNzaW9uRGF0YUZvckRyaXZlciAoSW5uZXJEcml2ZXIpIHtcblxuICAgIC8vIGFjcXVpcmXvvJrnoa7kv53lubblj5HnmoTml7blgJnvvIzlj6rmnInkuIDkuKrlj6/ku6XmiafooYwgKCkgPT4gdGhpcy5zZXNzaW9uc+WHveaVsFxuICAgIC8vIHNlc3Npb25zOiB7fVxuICAgIGNvbnN0IHNlc3Npb25zID0gYXdhaXQgc2Vzc2lvbnNMaXN0R3VhcmQuYWNxdWlyZShBcHBpdW1Ecml2ZXIubmFtZSwgKCkgPT4gdGhpcy5zZXNzaW9ucyk7XG4gICAgbG9nLmluZm8oXCJzZXNzaW9uc0RhdGFGb3JEcml2ZXI6XCIsIHNlc3Npb25zKVxuICAgIGNvbnN0IGRhdGEgPSBfLnZhbHVlcyhzZXNzaW9ucylcbiAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChzKSA9PiBzLmNvbnN0cnVjdG9yLm5hbWUgPT09IElubmVyRHJpdmVyLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgLm1hcCgocykgPT4gcy5kcml2ZXJEYXRhKTtcbiAgICBmb3IgKGxldCBkYXR1bSBvZiBkYXRhKSB7XG4gICAgICBpZiAoIWRhdHVtKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgUHJvYmxlbSBnZXR0aW5nIHNlc3Npb24gZGF0YSBmb3IgZHJpdmVyIHR5cGUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtJbm5lckRyaXZlci5uYW1lfTsgZG9lcyBpdCBpbXBsZW1lbnQgJ2dldCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBkcml2ZXJEYXRhJz9gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBhc3luYyBkZWxldGVTZXNzaW9uIChzZXNzaW9uSWQpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IG90aGVyU2Vzc2lvbnNEYXRhID0gbnVsbDtcbiAgICAgIGxldCBkc3RTZXNzaW9uID0gbnVsbDtcbiAgICAgIGF3YWl0IHNlc3Npb25zTGlzdEd1YXJkLmFjcXVpcmUoQXBwaXVtRHJpdmVyLm5hbWUsICgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnNlc3Npb25zW3Nlc3Npb25JZF0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3VyQ29uc3RydWN0b3JOYW1lID0gdGhpcy5zZXNzaW9uc1tzZXNzaW9uSWRdLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIG90aGVyU2Vzc2lvbnNEYXRhID0gXy50b1BhaXJzKHRoaXMuc2Vzc2lvbnMpXG4gICAgICAgICAgICAgIC5maWx0ZXIoKFtrZXksIHZhbHVlXSkgPT4gdmFsdWUuY29uc3RydWN0b3IubmFtZSA9PT0gY3VyQ29uc3RydWN0b3JOYW1lICYmIGtleSAhPT0gc2Vzc2lvbklkKVxuICAgICAgICAgICAgICAubWFwKChbLCB2YWx1ZV0pID0+IHZhbHVlLmRyaXZlckRhdGEpO1xuICAgICAgICBkc3RTZXNzaW9uID0gdGhpcy5zZXNzaW9uc1tzZXNzaW9uSWRdO1xuICAgICAgICBsb2cuaW5mbyhgUmVtb3Zpbmcgc2Vzc2lvbiAke3Nlc3Npb25JZH0gZnJvbSBvdXIgbWFzdGVyIHNlc3Npb24gbGlzdGApO1xuICAgICAgICAvLyByZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhlIGRlbGV0ZVNlc3Npb24gY29tcGxldGVzIHN1Y2Nlc3NmdWxseSBvciBub3RcbiAgICAgICAgLy8gbWFrZSB0aGUgc2Vzc2lvbiB1bmF2YWlsYWJsZSwgYmVjYXVzZSB3aG8ga25vd3Mgd2hhdCBzdGF0ZSBpdCBtaWdodFxuICAgICAgICAvLyBiZSBpbiBvdGhlcndpc2VcbiAgICAgICAgZGVsZXRlIHRoaXMuc2Vzc2lvbnNbc2Vzc2lvbklkXTtcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgZHN0U2Vzc2lvbi5kZWxldGVTZXNzaW9uKHNlc3Npb25JZCwgb3RoZXJTZXNzaW9uc0RhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGxvZy5lcnJvcihgSGFkIHRyb3VibGUgZW5kaW5nIHNlc3Npb24gJHtzZXNzaW9uSWR9OiAke2UubWVzc2FnZX1gKTtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZXhlY3V0ZUNvbW1hbmQgKGNtZCwgLi4uYXJncykge1xuICAgIC8vIGdldFN0YXR1cyBjb21tYW5kIHNob3VsZCBub3QgYmUgcHV0IGludG8gcXVldWUuIElmIHdlIGRvIGl0IGFzIHBhcnQgb2Ygc3VwZXIuZXhlY3V0ZUNvbW1hbmQsIGl0IHdpbGwgYmUgYWRkZWQgdG8gcXVldWUuXG4gICAgLy8gVGhlcmUgd2lsbCBiZSBsb3Qgb2Ygc3RhdHVzIGNvbW1hbmRzIGluIHF1ZXVlIGR1cmluZyBjcmVhdGVTZXNzaW9uIGNvbW1hbmQsIGFzIGNyZWF0ZVNlc3Npb24gY2FuIHRha2UgdXAgdG8gb3IgbW9yZSB0aGFuIGEgbWludXRlLlxuICAgIGlmIChjbWQgPT09ICdnZXRTdGF0dXMnKSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXRTdGF0dXMoKTtcbiAgICB9XG4gICAgaWYgKGlzQXBwaXVtRHJpdmVyQ29tbWFuZChjbWQpKSB7XG4gICAgICByZXR1cm4gc3VwZXIuZXhlY3V0ZUNvbW1hbmQoY21kLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZXNzaW9uSWQgPSBfLmxhc3QoYXJncyk7XG4gICAgY29uc3QgZHN0U2Vzc2lvbiA9IGF3YWl0IHNlc3Npb25zTGlzdEd1YXJkLmFjcXVpcmUoQXBwaXVtRHJpdmVyLm5hbWUsICgpID0+IHRoaXMuc2Vzc2lvbnNbc2Vzc2lvbklkXSk7XG4gICAgaWYgKCFkc3RTZXNzaW9uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBzZXNzaW9uIHdpdGggaWQgJyR7c2Vzc2lvbklkfScgZG9lcyBub3QgZXhpc3RgKTtcbiAgICB9XG4gICAgcmV0dXJuIGRzdFNlc3Npb24uZXhlY3V0ZUNvbW1hbmQoY21kLCAuLi5hcmdzKTtcbiAgfVxuXG4gIHByb3h5QWN0aXZlIChzZXNzaW9uSWQpIHtcbiAgICBjb25zdCBkc3RTZXNzaW9uID0gdGhpcy5zZXNzaW9uc1tzZXNzaW9uSWRdO1xuICAgIHJldHVybiBkc3RTZXNzaW9uICYmIF8uaXNGdW5jdGlvbihkc3RTZXNzaW9uLnByb3h5QWN0aXZlKSAmJiBkc3RTZXNzaW9uLnByb3h5QWN0aXZlKHNlc3Npb25JZCk7XG4gIH1cblxuICBnZXRQcm94eUF2b2lkTGlzdCAoc2Vzc2lvbklkKSB7XG4gICAgY29uc3QgZHN0U2Vzc2lvbiA9IHRoaXMuc2Vzc2lvbnNbc2Vzc2lvbklkXTtcbiAgICByZXR1cm4gZHN0U2Vzc2lvbiA/IGRzdFNlc3Npb24uZ2V0UHJveHlBdm9pZExpc3QoKSA6IFtdO1xuICB9XG5cbiAgY2FuUHJveHkgKHNlc3Npb25JZCkge1xuICAgIGNvbnN0IGRzdFNlc3Npb24gPSB0aGlzLnNlc3Npb25zW3Nlc3Npb25JZF07XG4gICAgcmV0dXJuIGRzdFNlc3Npb24gJiYgZHN0U2Vzc2lvbi5jYW5Qcm94eShzZXNzaW9uSWQpO1xuICB9XG59XG5cbi8vIGhlbHAgZGVjaWRlIHdoaWNoIGNvbW1hbmRzIHNob3VsZCBiZSBwcm94aWVkIHRvIHN1Yi1kcml2ZXJzIGFuZCB3aGljaFxuLy8gc2hvdWxkIGJlIGhhbmRsZWQgYnkgdGhpcywgb3VyIHVtYnJlbGxhIGRyaXZlclxuZnVuY3Rpb24gaXNBcHBpdW1Ecml2ZXJDb21tYW5kIChjbWQpIHtcbiAgcmV0dXJuICFpc1Nlc3Npb25Db21tYW5kKGNtZCkgfHwgY21kID09PSBcImRlbGV0ZVNlc3Npb25cIjtcbn1cblxuZnVuY3Rpb24gZ2V0QXBwaXVtUm91dGVyIChhcmdzKSB7XG4gIGxldCBhcHBpdW0gPSBuZXcgQXBwaXVtRHJpdmVyKGFyZ3MpO1xuICByZXR1cm4gcm91dGVDb25maWd1cmluZ0Z1bmN0aW9uKGFwcGl1bSk7XG59XG5cbmV4cG9ydCB7IEFwcGl1bURyaXZlciwgZ2V0QXBwaXVtUm91dGVyIH07XG5leHBvcnQgZGVmYXVsdCBnZXRBcHBpdW1Sb3V0ZXI7XG4iXSwic291cmNlUm9vdCI6Ii4uLy4uIn0=
