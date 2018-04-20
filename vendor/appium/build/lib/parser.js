'use strict';

var _defineProperty = require('babel-runtime/helpers/define-property')['default'];

var _slicedToArray = require('babel-runtime/helpers/sliced-to-array')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _argparse = require('argparse');

var _packageJson = require('../../package.json');

var _packageJson2 = _interopRequireDefault(_packageJson);

// eslint-disable-line import/no-unresolved

var args = [[['--shell'], {
  required: false,
  defaultValue: null,
  help: 'Enter REPL mode',
  nargs: 0,
  dest: 'shell'
}], [['--reboot'], {
  defaultValue: false,
  dest: 'reboot',
  action: 'storeTrue',
  required: false,
  help: '(Android-only) reboot emulator after each session and kill it at the end',
  nargs: 0
}], [['--ipa'], {
  required: false,
  defaultValue: null,
  help: '(IOS-only) abs path to compiled .ipa file',
  example: '/abs/path/to/my.ipa',
  dest: 'ipa'
}], [['-a', '--address'], {
  defaultValue: '0.0.0.0',
  required: false,
  example: '0.0.0.0',
  help: 'IP Address to listen on',
  dest: 'address'
}], [['-p', '--port'], {
  defaultValue: 4723,
  required: false,
  type: 'int',
  example: '4723',
  help: 'port to listen on',
  dest: 'port'
}], [['-ca', '--callback-address'], {
  required: false,
  dest: 'callbackAddress',
  defaultValue: null,
  example: '127.0.0.1',
  help: 'callback IP Address (default: same as --address)'
}], [['-cp', '--callback-port'], {
  required: false,
  dest: 'callbackPort',
  defaultValue: null,
  type: 'int',
  example: '4723',
  help: 'callback port (default: same as port)'
}], [['-bp', '--bootstrap-port'], {
  defaultValue: 4725,
  dest: 'bootstrapPort',
  required: false,
  type: 'int',
  example: '4725',
  help: '(Android-only) port to use on device to talk to Appium'
}], [['-tp', '--testbundle-port'], {
  defaultValue: 4724,
  dest: 'testbundlePort',
  required: false,
  type: 'int',
  example: '4724',
  help: 'Port to use on PC to foward to testbundle on device'
}], [['--install-setting-apk'], {
  dest: 'installSettingApk',
  defaultValue: false,
  action: 'storeTrue',
  required: false,
  help: '(Android-only) If set, install or update setting apk',
  nargs: 0
}], [['--install-unlock-apk'], {
  dest: 'installUnlockApk',
  defaultValue: false,
  action: 'storeTrue',
  required: false,
  help: '(Android-only) If set, install or update unlock apk',
  nargs: 0
}], [['--install-unicodeIME-apk'], {
  dest: 'installUnicodeApk',
  defaultValue: false,
  action: 'storeTrue',
  required: false,
  help: '(Android-only) If set, install or update unicodeIME',
  nargs: 0
}], [['--logcat-on'], {
  dest: 'startLogcat',
  defaultValue: false,
  action: 'storeTrue',
  required: false,
  help: '(Android-only) If set, start logcat on',
  nargs: 0
}], [['-r', '--backend-retries'], {
  defaultValue: 3,
  dest: 'backendRetries',
  required: false,
  type: 'int',
  example: '3',
  help: '(iOS-only) How many times to retry launching Instruments ' + 'before saying it crashed or timed out'
}], [['--session-override'], {
  defaultValue: false,
  dest: 'sessionOverride',
  action: 'storeTrue',
  required: false,
  help: 'Enables session override (clobbering)',
  nargs: 0
}], [['-l', '--pre-launch'], {
  defaultValue: false,
  dest: 'launch',
  action: 'storeTrue',
  required: false,
  help: 'Pre-launch the application before allowing the first session ' + '(Requires --app and, for Android, --app-pkg and --app-activity)',
  nargs: 0
}], [['-g', '--log'], {
  defaultValue: null,
  dest: 'log',
  required: false,
  example: '/path/to/appium.log',
  help: 'Also send log output to this file'
}], [['--log-level'], {
  choices: ['info', 'info:debug', 'info:info', 'info:warn', 'info:error', 'warn', 'warn:debug', 'warn:info', 'warn:warn', 'warn:error', 'error', 'error:debug', 'error:info', 'error:warn', 'error:error', 'debug', 'debug:debug', 'debug:info', 'debug:warn', 'debug:error'],
  defaultValue: 'debug',
  dest: 'loglevel',
  required: false,
  example: 'debug',
  help: 'log level; default (console[:file]): debug[:debug]'
}], [['--log-timestamp'], {
  defaultValue: true,
  required: false,
  help: 'Show timestamps in console output',
  nargs: 0,
  action: 'storeTrue',
  dest: 'logTimestamp'
}], [['--local-timezone'], {
  defaultValue: true,
  required: false,
  help: 'Use local timezone for timestamps',
  nargs: 0,
  action: 'storeTrue',
  dest: 'localTimezone'
}], [['--log-no-colors'], {
  defaultValue: false,
  required: false,
  help: 'Do not use colors in console output',
  nargs: 0,
  action: 'storeTrue',
  dest: 'logNoColors'
}], [['-G', '--webhook'], {
  defaultValue: null,
  required: false,
  example: 'localhost:9876',
  dest: 'webhook',
  help: 'Also send log output to this HTTP listener'
}], [['--safari'], {
  defaultValue: false,
  action: 'storeTrue',
  dest: 'safari',
  required: false,
  help: '(IOS-Only) Use the safari app',
  nargs: 0
}], [['--default-device', '-dd'], {
  dest: 'defaultDevice',
  defaultValue: false,
  action: 'storeTrue',
  required: false,
  help: '(IOS-Simulator-only) use the default simulator that instruments ' + 'launches on its own'
}], [['--force-iphone'], {
  defaultValue: false,
  dest: 'forceIphone',
  action: 'storeTrue',
  required: false,
  help: '(IOS-only) Use the iPhone Simulator no matter what the app wants',
  nargs: 0
}], [['--force-ipad'], {
  defaultValue: false,
  dest: 'forceIpad',
  action: 'storeTrue',
  required: false,
  help: '(IOS-only) Use the iPad Simulator no matter what the app wants',
  nargs: 0
}], [['--tracetemplate'], {
  defaultValue: null,
  dest: 'automationTraceTemplatePath',
  required: false,
  example: '/Users/me/Automation.tracetemplate',
  help: '(IOS-only) .tracetemplate file to use with Instruments'
}], [['--instruments'], {
  defaultValue: null,
  dest: 'instrumentsPath',
  require: false,
  example: '/path/to/instruments',
  help: '(IOS-only) path to instruments binary'
}], [['--nodeconfig'], {
  required: false,
  defaultValue: null,
  dest: 'nodeconfig',
  help: 'Configuration JSON file to register appium with selenium grid',
  example: '/abs/path/to/nodeconfig.json'
}], [['-ra', '--robot-address'], {
  defaultValue: '0.0.0.0',
  dest: 'robotAddress',
  required: false,
  example: '0.0.0.0',
  help: 'IP Address of robot'
}], [['-rp', '--robot-port'], {
  defaultValue: -1,
  dest: 'robotPort',
  required: false,
  type: 'int',
  example: '4242',
  help: 'port for robot'
}], [['--selendroid-port'], {
  defaultValue: 8080,
  dest: 'selendroidPort',
  required: false,
  type: 'int',
  example: '8080',
  help: 'Local port used for communication with Selendroid'
}], [['--chromedriver-port'], {
  defaultValue: null,
  dest: 'chromeDriverPort',
  required: false,
  type: 'int',
  example: '9515',
  help: 'Port upon which ChromeDriver will run. If not given, Android driver will pick a random available port.'
}], [['--chromedriver-executable'], {
  defaultValue: null,
  dest: 'chromedriverExecutable',
  required: false,
  help: 'ChromeDriver executable full path'
}], [['--show-config'], {
  defaultValue: false,
  dest: 'showConfig',
  action: 'storeTrue',
  required: false,
  help: 'Show info about the appium server configuration and exit'
}], [['--no-perms-check'], {
  defaultValue: false,
  dest: 'noPermsCheck',
  action: 'storeTrue',
  required: false,
  help: 'Bypass Appium\'s checks to ensure we can read/write necessary files'
}], [['--strict-caps'], {
  defaultValue: false,
  dest: 'enforceStrictCaps',
  action: 'storeTrue',
  required: false,
  help: 'Cause sessions to fail if desired caps are sent in that Appium ' + 'does not recognize as valid for the selected device',
  nargs: 0
}], [['--isolate-sim-device'], {
  defaultValue: false,
  dest: 'isolateSimDevice',
  action: 'storeTrue',
  required: false,
  help: 'Xcode 6 has a bug on some platforms where a certain simulator ' + 'can only be launched without error if all other simulator devices ' + 'are first deleted. This option causes Appium to delete all ' + 'devices other than the one being used by Appium. Note that this ' + 'is a permanent deletion, and you are responsible for using simctl ' + 'or xcode to manage the categories of devices used with Appium.',
  nargs: 0
}], [['--tmp'], {
  defaultValue: null,
  dest: 'tmpDir',
  required: false,
  help: 'Absolute path to directory Appium can use to manage temporary ' + 'files, like built-in iOS apps it needs to move around. On *nix/Mac ' + 'defaults to /tmp, on Windows defaults to C:\\Windows\\Temp'
}], [['--trace-dir'], {
  defaultValue: null,
  dest: 'traceDir',
  required: false,
  help: 'Absolute path to directory Appium use to save ios instruments ' + 'traces, defaults to <tmp dir>/appium-instruments'
}], [['--debug-log-spacing'], {
  dest: 'debugLogSpacing',
  defaultValue: false,
  action: 'storeTrue',
  required: false,
  help: 'Add exaggerated spacing in logs to help with visual inspection'
}], [['--suppress-adb-kill-server'], {
  dest: 'suppressKillServer',
  defaultValue: true,
  action: 'storeTrue',
  required: false,
  help: '(Android-only) If set, prevents Appium from killing the adb server instance',
  nargs: 0
}], [['--async-trace'], {
  dest: 'asyncTrace',
  defaultValue: false,
  required: false,
  action: 'storeTrue',
  help: 'Add long stack traces to log entries. Recommended for debugging only.'
}], [['--webkit-debug-proxy-port'], {
  defaultValue: 27753,
  dest: 'webkitDebugProxyPort',
  required: false,
  type: 'int',
  example: "27753",
  help: '(IOS-only) Local port used for communication with ios-webkit-debug-proxy'
}], [['--webdriveragent-port'], {
  defaultValue: 8100,
  dest: 'wdaLocalPort',
  required: false,
  type: 'int',
  example: "8100",
  help: '(IOS-only, XCUITest-only) Local port used for communication with WebDriverAgent'
}], [['-dc', '--default-capabilities'], {
  dest: 'defaultCapabilities',
  defaultValue: {},
  type: parseDefaultCaps,
  required: false,
  example: '[ \'{"app": "myapp.app", "deviceName": "iPhone Simulator"}\' ' + '| /path/to/caps.json ]',
  help: 'Set the default desired capabilities, which will be set on each ' + 'session unless overridden by received capabilities.'
}]];

var deprecatedArgs = [[['--command-timeout'], {
  defaultValue: 60,
  dest: 'defaultCommandTimeout',
  type: 'int',
  required: false,
  help: '[DEPRECATED] No effect. This used to be the default command ' + 'timeout for the server to use for all sessions (in seconds and ' + 'should be less than 2147483). Use newCommandTimeout cap instead'
}], [['-k', '--keep-artifacts'], {
  defaultValue: false,
  dest: 'keepArtifacts',
  action: 'storeTrue',
  required: false,
  help: '[DEPRECATED] - no effect, trace is now in tmp dir by default and is ' + 'cleared before each run. Please also refer to the --trace-dir flag.',
  nargs: 0
}], [['--platform-name'], {
  dest: 'platformName',
  defaultValue: null,
  required: false,
  deprecatedFor: '--default-capabilities',
  example: 'iOS',
  help: '[DEPRECATED] - Name of the mobile platform: iOS, Android, or FirefoxOS'
}], [['--platform-version'], {
  dest: 'platformVersion',
  defaultValue: null,
  required: false,
  deprecatedFor: '--default-capabilities',
  example: '7.1',
  help: '[DEPRECATED] - Version of the mobile platform'
}], [['--automation-name'], {
  dest: 'automationName',
  defaultValue: null,
  required: false,
  deprecatedFor: '--default-capabilities',
  example: 'Appium',
  help: '[DEPRECATED] - Name of the automation tool: Appium or Selendroid'
}], [['--device-name'], {
  dest: 'deviceName',
  defaultValue: null,
  required: false,
  deprecatedFor: '--default-capabilities',
  example: 'iPhone Retina (4-inch), Android Emulator',
  help: '[DEPRECATED] - Name of the mobile device to use'
}], [['--browser-name'], {
  dest: 'browserName',
  defaultValue: null,
  required: false,
  deprecatedFor: '--default-capabilities',
  example: 'Safari',
  help: '[DEPRECATED] - Name of the mobile browser: Safari or Chrome'
}], [['--app'], {
  dest: 'app',
  required: false,
  defaultValue: null,
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - IOS: abs path to simulator-compiled .app file or the bundle_id of the desired target on device; Android: abs path to .apk file',
  example: '/abs/path/to/my.app'
}], [['-lt', '--launch-timeout'], {
  defaultValue: 90000,
  dest: 'launchTimeout',
  type: 'int',
  required: false,
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - (iOS-only) how long in ms to wait for Instruments to launch'
}], [['--language'], {
  defaultValue: null,
  dest: 'language',
  required: false,
  example: 'en',
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - Language for the iOS simulator / Android Emulator'
}], [['--locale'], {
  defaultValue: null,
  dest: 'locale',
  required: false,
  example: 'en_US',
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - Locale for the iOS simulator / Android Emulator'
}], [['-U', '--udid'], {
  dest: 'udid',
  required: false,
  defaultValue: null,
  example: '1adsf-sdfas-asdf-123sdf',
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - Unique device identifier of the connected physical device'
}], [['--orientation'], {
  dest: 'orientation',
  defaultValue: null,
  required: false,
  example: 'LANDSCAPE',
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - (IOS-only) use LANDSCAPE or PORTRAIT to initialize all requests ' + 'to this orientation'
}], [['--no-reset'], {
  defaultValue: false,
  dest: 'noReset',
  action: 'storeTrue',
  required: false,
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - Do not reset app state between sessions (IOS: do not delete app ' + 'plist files; Android: do not uninstall app before new session)',
  nargs: 0
}], [['--full-reset'], {
  defaultValue: false,
  dest: 'fullReset',
  action: 'storeTrue',
  required: false,
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - (iOS) Delete the entire simulator folder. (Android) Reset app ' + 'state by uninstalling app instead of clearing app data. On ' + 'Android, this will also remove the app after the session is complete.',
  nargs: 0
}], [['--app-pkg'], {
  dest: 'appPackage',
  defaultValue: null,
  required: false,
  deprecatedFor: '--default-capabilities',
  example: 'com.example.android.myApp',
  help: '[DEPRECATED] - (Android-only) Java package of the Android app you want to run ' + '(e.g., com.example.android.myApp)'
}], [['--app-activity'], {
  dest: 'appActivity',
  defaultValue: null,
  required: false,
  example: 'MainActivity',
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - (Android-only) Activity name for the Android activity you want ' + 'to launch from your package (e.g., MainActivity)'
}], [['--app-wait-package'], {
  dest: 'appWaitPackage',
  defaultValue: false,
  required: false,
  example: 'com.example.android.myApp',
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - (Android-only) Package name for the Android activity you want ' + 'to wait for (e.g., com.example.android.myApp)'
}], [['--app-wait-activity'], {
  dest: 'appWaitActivity',
  defaultValue: false,
  required: false,
  example: 'SplashActivity',
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - (Android-only) Activity name for the Android activity you want ' + 'to wait for (e.g., SplashActivity)'
}], [['--device-ready-timeout'], {
  dest: 'deviceReadyTimeout',
  defaultValue: 5,
  required: false,
  type: 'int',
  example: '5',
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - (Android-only) Timeout in seconds while waiting for device to become ready'
}], [['--android-coverage'], {
  dest: 'androidCoverage',
  defaultValue: false,
  required: false,
  example: 'com.my.Pkg/com.my.Pkg.instrumentation.MyInstrumentation',
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - (Android-only) Fully qualified instrumentation class. Passed to -w in ' + 'adb shell am instrument -e coverage true -w '
}], [['--avd'], {
  dest: 'avd',
  defaultValue: null,
  required: false,
  example: '@default',
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - (Android-only) Name of the avd to launch'
}], [['--avd-args'], {
  dest: 'avdArgs',
  defaultValue: null,
  required: false,
  example: '-no-snapshot-load',
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - (Android-only) Additional emulator arguments to launch the avd'
}], [['--use-keystore'], {
  defaultValue: false,
  dest: 'useKeystore',
  action: 'storeTrue',
  required: false,
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - (Android-only) When set the keystore will be used to sign apks.'
}], [['--keystore-path'], {
  defaultValue: _path2['default'].resolve(process.env.HOME || process.env.USERPROFILE || '', '.android', 'debug.keystore'),
  dest: 'keystorePath',
  required: false,
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - (Android-only) Path to keystore'
}], [['--keystore-password'], {
  defaultValue: 'android',
  dest: 'keystorePassword',
  required: false,
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - (Android-only) Password to keystore'
}], [['--key-alias'], {
  defaultValue: 'androiddebugkey',
  dest: 'keyAlias',
  required: false,
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - (Android-only) Key alias'
}], [['--key-password'], {
  defaultValue: 'android',
  dest: 'keyPassword',
  required: false,
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - (Android-only) Key password'
}], [['--intent-action'], {
  dest: 'intentAction',
  defaultValue: 'android.intent.action.MAIN',
  required: false,
  example: 'android.intent.action.MAIN',
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - (Android-only) Intent action which will be used to start activity'
}], [['--intent-category'], {
  dest: 'intentCategory',
  defaultValue: 'android.intent.category.LAUNCHER',
  required: false,
  example: 'android.intent.category.APP_CONTACTS',
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - (Android-only) Intent category which will be used to start activity'
}], [['--intent-flags'], {
  dest: 'intentFlags',
  defaultValue: '0x10200000',
  required: false,
  example: '0x10200000',
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - (Android-only) Flags that will be used to start activity'
}], [['--intent-args'], {
  dest: 'optionalIntentArguments',
  defaultValue: null,
  required: false,
  example: '0x10200000',
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - (Android-only) Additional intent arguments that will be used to ' + 'start activity'
}], [['--dont-stop-app-on-reset'], {
  dest: 'dontStopAppOnReset',
  defaultValue: true,
  action: 'storeTrue',
  required: false,
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - (Android-only) When included, refrains from stopping the app before restart'
}], [['--calendar-format'], {
  defaultValue: null,
  dest: 'calendarFormat',
  required: false,
  example: 'gregorian',
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - (IOS-only) calendar format for the iOS simulator'
}], [['--native-instruments-lib'], {
  defaultValue: false,
  dest: 'nativeInstrumentsLib',
  action: 'storeTrue',
  required: false,
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - (IOS-only) IOS has a weird built-in unavoidable ' + 'delay. We patch this in appium. If you do not want it patched, ' + 'pass in this flag.',
  nargs: 0
}], [['--keep-keychains'], {
  defaultValue: false,
  dest: 'keepKeyChains',
  action: 'storeTrue',
  required: false,
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - (iOS-only) Whether to keep keychains (Library/Keychains) when reset app between sessions',
  nargs: 0
}], [['--localizable-strings-dir'], {
  required: false,
  dest: 'localizableStringsDir',
  defaultValue: 'en.lproj',
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - (IOS-only) the relative path of the dir where Localizable.strings file resides ',
  example: 'en.lproj'
}], [['--show-ios-log'], {
  defaultValue: false,
  dest: 'showIOSLog',
  action: 'storeTrue',
  required: false,
  deprecatedFor: '--default-capabilities',
  help: '[DEPRECATED] - (IOS-only) if set, the iOS system log will be written to the console',
  nargs: 0
}], [['--enable-heapdump'], {
  defaultValue: false,
  dest: 'heapdumpEnabled',
  action: 'storeTrue',
  required: false,
  help: 'Enable collection of NodeJS memory heap dumps. This is useful for memory leaks lookup',
  nargs: 0
}]];

function updateParseArgsForDefaultCapabilities(parser) {
  // here we want to update the parser.parseArgs() function
  // in order to bring together all the args that are actually
  // default caps.
  // once those deprecated args are actually removed, this
  // can also be removed
  parser._parseArgs = parser.parseArgs;
  parser.parseArgs = function (args) {
    var parsedArgs = parser._parseArgs(args);
    parsedArgs.defaultCapabilities = parsedArgs.defaultCapabilities || {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _getIterator(deprecatedArgs), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var argEntry = _step.value;

        var arg = argEntry[1].dest;
        if (argEntry[1].deprecatedFor === '--default-capabilities') {
          if (arg in parsedArgs && parsedArgs[arg] !== argEntry[1].defaultValue) {
            parsedArgs.defaultCapabilities[arg] = parsedArgs[arg];
            // j s h i n t can't handle complex interpolated strings
            var capDict = _defineProperty({}, arg, parsedArgs[arg]);
            argEntry[1].deprecatedFor = '--default-capabilities ' + ('\'' + JSON.stringify(capDict) + '\'');
          }
        }
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

    return parsedArgs;
  };
}

function parseDefaultCaps(caps) {
  try {
    // use synchronous file access, as `argparse` provides no way of either
    // awaiting or using callbacks. This step happens in startup, in what is
    // effectively command-line code, so nothing is blocked in terms of
    // sessions, so holding up the event loop does not incur the usual
    // drawbacks.
    if (_fs2['default'].statSync(caps).isFile()) {
      caps = _fs2['default'].readFileSync(caps, 'utf8');
    }
  } catch (err) {
    // not a file, or not readable
  }
  caps = JSON.parse(caps);
  if (!_lodash2['default'].isPlainObject(caps)) {
    throw 'Invalid format for default capabilities';
  }
  return caps;
}

function getParser() {
  var parser = new _argparse.ArgumentParser({
    version: _packageJson2['default'].version,
    addHelp: true,
    description: 'A webdriver-compatible server for use with native and hybrid iOS and Android applications.',
    prog: process.argv[1] || 'Appium'
  });
  var allArgs = _lodash2['default'].union(args, deprecatedArgs);
  parser.rawArgs = allArgs;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = _getIterator(allArgs), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var arg = _step2.value;

      parser.addArgument(arg[0], arg[1]);
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

  updateParseArgsForDefaultCapabilities(parser);

  return parser;
}

function getDefaultArgs() {
  var defaults = {};
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = _getIterator(args), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var _step3$value = _slicedToArray(_step3.value, 2);

      var arg = _step3$value[1];

      defaults[arg.dest] = arg.defaultValue;
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

  return defaults;
}

exports['default'] = getParser;
exports.getDefaultArgs = getDefaultArgs;
exports.getParser = getParser;
//# sourceMappingURL=data:application/json;charset=utf8;base64,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QyxFQUFFO0FBQzFCLFVBQU0seUNBQXlDLENBQUM7R0FDakQ7QUFDRCxTQUFPLElBQUksQ0FBQztDQUNiOztBQUVELFNBQVMsU0FBUyxHQUFJO0FBQ3BCLE1BQUksTUFBTSxHQUFHLDZCQUFtQjtBQUM5QixXQUFPLEVBQUUseUJBQU8sT0FBTztBQUN2QixXQUFPLEVBQUUsSUFBSTtBQUNiLGVBQVcsRUFBRSw0RkFBNEY7QUFDekcsUUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUTtHQUNsQyxDQUFDLENBQUM7QUFDSCxNQUFJLE9BQU8sR0FBRyxvQkFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQzVDLFFBQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOzs7Ozs7QUFDekIsdUNBQWdCLE9BQU8saUhBQUU7VUFBaEIsR0FBRzs7QUFDVixZQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNwQzs7Ozs7Ozs7Ozs7Ozs7OztBQUNELHVDQUFxQyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUU5QyxTQUFPLE1BQU0sQ0FBQztDQUNmOztBQUVELFNBQVMsY0FBYyxHQUFJO0FBQ3pCLE1BQUksUUFBUSxHQUFHLEVBQUUsQ0FBQzs7Ozs7O0FBQ2xCLHVDQUFvQixJQUFJLGlIQUFFOzs7VUFBZCxHQUFHOztBQUNiLGNBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQztLQUN2Qzs7Ozs7Ozs7Ozs7Ozs7OztBQUNELFNBQU8sUUFBUSxDQUFDO0NBQ2pCOztxQkFFYyxTQUFTO1FBQ2YsY0FBYyxHQUFkLGNBQWM7UUFBRSxTQUFTLEdBQVQsU0FBUyIsImZpbGUiOiJsaWIvcGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEFyZ3VtZW50UGFyc2VyIH0gZnJvbSAnYXJncGFyc2UnO1xuaW1wb3J0IHBrZ09iaiBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbXBvcnQvbm8tdW5yZXNvbHZlZFxuXG5cbmNvbnN0IGFyZ3MgPSBbXG4gIFtbJy0tc2hlbGwnXSwge1xuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgaGVscDogJ0VudGVyIFJFUEwgbW9kZScsXG4gICAgbmFyZ3M6IDAsXG4gICAgZGVzdDogJ3NoZWxsJyxcbiAgfV0sXG5cbiAgW1snLS1yZWJvb3QnXSwge1xuICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgZGVzdDogJ3JlYm9vdCcsXG4gICAgYWN0aW9uOiAnc3RvcmVUcnVlJyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgaGVscDogJyhBbmRyb2lkLW9ubHkpIHJlYm9vdCBlbXVsYXRvciBhZnRlciBlYWNoIHNlc3Npb24gYW5kIGtpbGwgaXQgYXQgdGhlIGVuZCcsXG4gICAgbmFyZ3M6IDAsXG4gIH1dLFxuXG4gIFtbJy0taXBhJ10sIHtcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgIGhlbHA6ICcoSU9TLW9ubHkpIGFicyBwYXRoIHRvIGNvbXBpbGVkIC5pcGEgZmlsZScsXG4gICAgZXhhbXBsZTogJy9hYnMvcGF0aC90by9teS5pcGEnLFxuICAgIGRlc3Q6ICdpcGEnLFxuICB9XSxcblxuICBbWyctYScsICctLWFkZHJlc3MnXSwge1xuICAgIGRlZmF1bHRWYWx1ZTogJzAuMC4wLjAnLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBleGFtcGxlOiAnMC4wLjAuMCcsXG4gICAgaGVscDogJ0lQIEFkZHJlc3MgdG8gbGlzdGVuIG9uJyxcbiAgICBkZXN0OiAnYWRkcmVzcycsXG4gIH1dLFxuXG4gIFtbJy1wJywgJy0tcG9ydCddLCB7XG4gICAgZGVmYXVsdFZhbHVlOiA0NzIzLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB0eXBlOiAnaW50JyxcbiAgICBleGFtcGxlOiAnNDcyMycsXG4gICAgaGVscDogJ3BvcnQgdG8gbGlzdGVuIG9uJyxcbiAgICBkZXN0OiAncG9ydCcsXG4gIH1dLFxuXG4gIFtbJy1jYScsICctLWNhbGxiYWNrLWFkZHJlc3MnXSwge1xuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBkZXN0OiAnY2FsbGJhY2tBZGRyZXNzJyxcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgZXhhbXBsZTogJzEyNy4wLjAuMScsXG4gICAgaGVscDogJ2NhbGxiYWNrIElQIEFkZHJlc3MgKGRlZmF1bHQ6IHNhbWUgYXMgLS1hZGRyZXNzKScsXG4gIH1dLFxuXG4gIFtbJy1jcCcsICctLWNhbGxiYWNrLXBvcnQnXSwge1xuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBkZXN0OiAnY2FsbGJhY2tQb3J0JyxcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgdHlwZTogJ2ludCcsXG4gICAgZXhhbXBsZTogJzQ3MjMnLFxuICAgIGhlbHA6ICdjYWxsYmFjayBwb3J0IChkZWZhdWx0OiBzYW1lIGFzIHBvcnQpJyxcbiAgfV0sXG5cbiAgW1snLWJwJywgJy0tYm9vdHN0cmFwLXBvcnQnXSwge1xuICAgIGRlZmF1bHRWYWx1ZTogNDcyNSxcbiAgICBkZXN0OiAnYm9vdHN0cmFwUG9ydCcsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIHR5cGU6ICdpbnQnLFxuICAgIGV4YW1wbGU6ICc0NzI1JyxcbiAgICBoZWxwOiAnKEFuZHJvaWQtb25seSkgcG9ydCB0byB1c2Ugb24gZGV2aWNlIHRvIHRhbGsgdG8gQXBwaXVtJyxcbiAgfV0sXG5cbiAgW1snLXRwJywgJy0tdGVzdGJ1bmRsZS1wb3J0J10sIHtcbiAgICBkZWZhdWx0VmFsdWU6IDQ3MjQsXG4gICAgZGVzdDogJ3Rlc3RidW5kbGVQb3J0JyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgdHlwZTogJ2ludCcsXG4gICAgZXhhbXBsZTogJzQ3MjQnLFxuICAgIGhlbHA6ICdQb3J0IHRvIHVzZSBvbiBQQyB0byBmb3dhcmQgdG8gdGVzdGJ1bmRsZSBvbiBkZXZpY2UnLFxuICB9XSxcblxuICBbWyctLWluc3RhbGwtc2V0dGluZy1hcGsnXSwge1xuICAgIGRlc3Q6ICdpbnN0YWxsU2V0dGluZ0FwaycsXG4gICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICBhY3Rpb246ICdzdG9yZVRydWUnLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBoZWxwOiAnKEFuZHJvaWQtb25seSkgSWYgc2V0LCBpbnN0YWxsIG9yIHVwZGF0ZSBzZXR0aW5nIGFwaycsXG4gICAgbmFyZ3M6IDAsXG4gIH1dLFxuXG4gIFtbJy0taW5zdGFsbC11bmxvY2stYXBrJ10sIHtcbiAgICBkZXN0OiAnaW5zdGFsbFVubG9ja0FwaycsXG4gICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICBhY3Rpb246ICdzdG9yZVRydWUnLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBoZWxwOiAnKEFuZHJvaWQtb25seSkgSWYgc2V0LCBpbnN0YWxsIG9yIHVwZGF0ZSB1bmxvY2sgYXBrJyxcbiAgICBuYXJnczogMCxcbiAgfV0sXG5cbiAgW1snLS1pbnN0YWxsLXVuaWNvZGVJTUUtYXBrJ10sIHtcbiAgICBkZXN0OiAnaW5zdGFsbFVuaWNvZGVBcGsnLFxuICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgYWN0aW9uOiAnc3RvcmVUcnVlJyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgaGVscDogJyhBbmRyb2lkLW9ubHkpIElmIHNldCwgaW5zdGFsbCBvciB1cGRhdGUgdW5pY29kZUlNRScsXG4gICAgbmFyZ3M6IDAsXG4gIH1dLFxuXG4gIFtbJy0tbG9nY2F0LW9uJ10sIHtcbiAgICBkZXN0OiAnc3RhcnRMb2djYXQnLFxuICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgYWN0aW9uOiAnc3RvcmVUcnVlJyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgaGVscDogJyhBbmRyb2lkLW9ubHkpIElmIHNldCwgc3RhcnQgbG9nY2F0IG9uJyxcbiAgICBuYXJnczogMCxcbiAgfV0sXG5cbiAgW1snLXInLCAnLS1iYWNrZW5kLXJldHJpZXMnXSwge1xuICAgIGRlZmF1bHRWYWx1ZTogMyxcbiAgICBkZXN0OiAnYmFja2VuZFJldHJpZXMnLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB0eXBlOiAnaW50JyxcbiAgICBleGFtcGxlOiAnMycsXG4gICAgaGVscDogJyhpT1Mtb25seSkgSG93IG1hbnkgdGltZXMgdG8gcmV0cnkgbGF1bmNoaW5nIEluc3RydW1lbnRzICcgK1xuICAgICAgICAgICdiZWZvcmUgc2F5aW5nIGl0IGNyYXNoZWQgb3IgdGltZWQgb3V0JyxcbiAgfV0sXG5cbiAgW1snLS1zZXNzaW9uLW92ZXJyaWRlJ10sIHtcbiAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgIGRlc3Q6ICdzZXNzaW9uT3ZlcnJpZGUnLFxuICAgIGFjdGlvbjogJ3N0b3JlVHJ1ZScsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGhlbHA6ICdFbmFibGVzIHNlc3Npb24gb3ZlcnJpZGUgKGNsb2JiZXJpbmcpJyxcbiAgICBuYXJnczogMCxcbiAgfV0sXG5cbiAgW1snLWwnLCAnLS1wcmUtbGF1bmNoJ10sIHtcbiAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgIGRlc3Q6ICdsYXVuY2gnLFxuICAgIGFjdGlvbjogJ3N0b3JlVHJ1ZScsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGhlbHA6ICdQcmUtbGF1bmNoIHRoZSBhcHBsaWNhdGlvbiBiZWZvcmUgYWxsb3dpbmcgdGhlIGZpcnN0IHNlc3Npb24gJyArXG4gICAgICAgICAgJyhSZXF1aXJlcyAtLWFwcCBhbmQsIGZvciBBbmRyb2lkLCAtLWFwcC1wa2cgYW5kIC0tYXBwLWFjdGl2aXR5KScsXG4gICAgbmFyZ3M6IDAsXG4gIH1dLFxuXG4gIFtbJy1nJywgJy0tbG9nJ10sIHtcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgZGVzdDogJ2xvZycsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGV4YW1wbGU6ICcvcGF0aC90by9hcHBpdW0ubG9nJyxcbiAgICBoZWxwOiAnQWxzbyBzZW5kIGxvZyBvdXRwdXQgdG8gdGhpcyBmaWxlJyxcbiAgfV0sXG5cbiAgW1snLS1sb2ctbGV2ZWwnXSwge1xuICAgIGNob2ljZXM6IFsnaW5mbycsICdpbmZvOmRlYnVnJywgJ2luZm86aW5mbycsICdpbmZvOndhcm4nLCAnaW5mbzplcnJvcicsXG4gICAgICAgICAgICAgICd3YXJuJywgJ3dhcm46ZGVidWcnLCAnd2FybjppbmZvJywgJ3dhcm46d2FybicsICd3YXJuOmVycm9yJyxcbiAgICAgICAgICAgICAgJ2Vycm9yJywgJ2Vycm9yOmRlYnVnJywgJ2Vycm9yOmluZm8nLCAnZXJyb3I6d2FybicsICdlcnJvcjplcnJvcicsXG4gICAgICAgICAgICAgICdkZWJ1ZycsICdkZWJ1ZzpkZWJ1ZycsICdkZWJ1ZzppbmZvJywgJ2RlYnVnOndhcm4nLCAnZGVidWc6ZXJyb3InXSxcbiAgICBkZWZhdWx0VmFsdWU6ICdkZWJ1ZycsXG4gICAgZGVzdDogJ2xvZ2xldmVsJyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZXhhbXBsZTogJ2RlYnVnJyxcbiAgICBoZWxwOiAnbG9nIGxldmVsOyBkZWZhdWx0IChjb25zb2xlWzpmaWxlXSk6IGRlYnVnWzpkZWJ1Z10nLFxuICB9XSxcblxuICBbWyctLWxvZy10aW1lc3RhbXAnXSwge1xuICAgIGRlZmF1bHRWYWx1ZTogdHJ1ZSxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgaGVscDogJ1Nob3cgdGltZXN0YW1wcyBpbiBjb25zb2xlIG91dHB1dCcsXG4gICAgbmFyZ3M6IDAsXG4gICAgYWN0aW9uOiAnc3RvcmVUcnVlJyxcbiAgICBkZXN0OiAnbG9nVGltZXN0YW1wJyxcbiAgfV0sXG5cbiAgW1snLS1sb2NhbC10aW1lem9uZSddLCB7XG4gICAgZGVmYXVsdFZhbHVlOiB0cnVlLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBoZWxwOiAnVXNlIGxvY2FsIHRpbWV6b25lIGZvciB0aW1lc3RhbXBzJyxcbiAgICBuYXJnczogMCxcbiAgICBhY3Rpb246ICdzdG9yZVRydWUnLFxuICAgIGRlc3Q6ICdsb2NhbFRpbWV6b25lJyxcbiAgfV0sXG5cbiAgW1snLS1sb2ctbm8tY29sb3JzJ10sIHtcbiAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBoZWxwOiAnRG8gbm90IHVzZSBjb2xvcnMgaW4gY29uc29sZSBvdXRwdXQnLFxuICAgIG5hcmdzOiAwLFxuICAgIGFjdGlvbjogJ3N0b3JlVHJ1ZScsXG4gICAgZGVzdDogJ2xvZ05vQ29sb3JzJyxcbiAgfV0sXG5cbiAgW1snLUcnLCAnLS13ZWJob29rJ10sIHtcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGV4YW1wbGU6ICdsb2NhbGhvc3Q6OTg3NicsXG4gICAgZGVzdDogJ3dlYmhvb2snLFxuICAgIGhlbHA6ICdBbHNvIHNlbmQgbG9nIG91dHB1dCB0byB0aGlzIEhUVFAgbGlzdGVuZXInLFxuICB9XSxcblxuICBbWyctLXNhZmFyaSddLCB7XG4gICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICBhY3Rpb246ICdzdG9yZVRydWUnLFxuICAgIGRlc3Q6ICdzYWZhcmknLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBoZWxwOiAnKElPUy1Pbmx5KSBVc2UgdGhlIHNhZmFyaSBhcHAnLFxuICAgIG5hcmdzOiAwLFxuICB9XSxcblxuICBbWyctLWRlZmF1bHQtZGV2aWNlJywgJy1kZCddLCB7XG4gICAgZGVzdDogJ2RlZmF1bHREZXZpY2UnLFxuICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgYWN0aW9uOiAnc3RvcmVUcnVlJyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgaGVscDogJyhJT1MtU2ltdWxhdG9yLW9ubHkpIHVzZSB0aGUgZGVmYXVsdCBzaW11bGF0b3IgdGhhdCBpbnN0cnVtZW50cyAnICtcbiAgICAgICAgICAnbGF1bmNoZXMgb24gaXRzIG93bicsXG4gIH1dLFxuXG4gIFtbJy0tZm9yY2UtaXBob25lJ10sIHtcbiAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgIGRlc3Q6ICdmb3JjZUlwaG9uZScsXG4gICAgYWN0aW9uOiAnc3RvcmVUcnVlJyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgaGVscDogJyhJT1Mtb25seSkgVXNlIHRoZSBpUGhvbmUgU2ltdWxhdG9yIG5vIG1hdHRlciB3aGF0IHRoZSBhcHAgd2FudHMnLFxuICAgIG5hcmdzOiAwLFxuICB9XSxcblxuICBbWyctLWZvcmNlLWlwYWQnXSwge1xuICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgZGVzdDogJ2ZvcmNlSXBhZCcsXG4gICAgYWN0aW9uOiAnc3RvcmVUcnVlJyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgaGVscDogJyhJT1Mtb25seSkgVXNlIHRoZSBpUGFkIFNpbXVsYXRvciBubyBtYXR0ZXIgd2hhdCB0aGUgYXBwIHdhbnRzJyxcbiAgICBuYXJnczogMCxcbiAgfV0sXG5cbiAgW1snLS10cmFjZXRlbXBsYXRlJ10sIHtcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgZGVzdDogJ2F1dG9tYXRpb25UcmFjZVRlbXBsYXRlUGF0aCcsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGV4YW1wbGU6ICcvVXNlcnMvbWUvQXV0b21hdGlvbi50cmFjZXRlbXBsYXRlJyxcbiAgICBoZWxwOiAnKElPUy1vbmx5KSAudHJhY2V0ZW1wbGF0ZSBmaWxlIHRvIHVzZSB3aXRoIEluc3RydW1lbnRzJyxcbiAgfV0sXG5cbiAgW1snLS1pbnN0cnVtZW50cyddLCB7XG4gICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgIGRlc3Q6ICdpbnN0cnVtZW50c1BhdGgnLFxuICAgIHJlcXVpcmU6IGZhbHNlLFxuICAgIGV4YW1wbGU6ICcvcGF0aC90by9pbnN0cnVtZW50cycsXG4gICAgaGVscDogJyhJT1Mtb25seSkgcGF0aCB0byBpbnN0cnVtZW50cyBiaW5hcnknLFxuICB9XSxcblxuICBbWyctLW5vZGVjb25maWcnXSwge1xuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgZGVzdDogJ25vZGVjb25maWcnLFxuICAgIGhlbHA6ICdDb25maWd1cmF0aW9uIEpTT04gZmlsZSB0byByZWdpc3RlciBhcHBpdW0gd2l0aCBzZWxlbml1bSBncmlkJyxcbiAgICBleGFtcGxlOiAnL2Ficy9wYXRoL3RvL25vZGVjb25maWcuanNvbicsXG4gIH1dLFxuXG4gIFtbJy1yYScsICctLXJvYm90LWFkZHJlc3MnXSwge1xuICAgIGRlZmF1bHRWYWx1ZTogJzAuMC4wLjAnLFxuICAgIGRlc3Q6ICdyb2JvdEFkZHJlc3MnLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBleGFtcGxlOiAnMC4wLjAuMCcsXG4gICAgaGVscDogJ0lQIEFkZHJlc3Mgb2Ygcm9ib3QnLFxuICB9XSxcblxuICBbWyctcnAnLCAnLS1yb2JvdC1wb3J0J10sIHtcbiAgICBkZWZhdWx0VmFsdWU6IC0xLFxuICAgIGRlc3Q6ICdyb2JvdFBvcnQnLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB0eXBlOiAnaW50JyxcbiAgICBleGFtcGxlOiAnNDI0MicsXG4gICAgaGVscDogJ3BvcnQgZm9yIHJvYm90JyxcbiAgfV0sXG5cbiAgW1snLS1zZWxlbmRyb2lkLXBvcnQnXSwge1xuICAgIGRlZmF1bHRWYWx1ZTogODA4MCxcbiAgICBkZXN0OiAnc2VsZW5kcm9pZFBvcnQnLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB0eXBlOiAnaW50JyxcbiAgICBleGFtcGxlOiAnODA4MCcsXG4gICAgaGVscDogJ0xvY2FsIHBvcnQgdXNlZCBmb3IgY29tbXVuaWNhdGlvbiB3aXRoIFNlbGVuZHJvaWQnLFxuICB9XSxcblxuICBbWyctLWNocm9tZWRyaXZlci1wb3J0J10sIHtcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgZGVzdDogJ2Nocm9tZURyaXZlclBvcnQnLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB0eXBlOiAnaW50JyxcbiAgICBleGFtcGxlOiAnOTUxNScsXG4gICAgaGVscDogJ1BvcnQgdXBvbiB3aGljaCBDaHJvbWVEcml2ZXIgd2lsbCBydW4uIElmIG5vdCBnaXZlbiwgQW5kcm9pZCBkcml2ZXIgd2lsbCBwaWNrIGEgcmFuZG9tIGF2YWlsYWJsZSBwb3J0LicsXG4gIH1dLFxuXG4gIFtbJy0tY2hyb21lZHJpdmVyLWV4ZWN1dGFibGUnXSwge1xuICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICBkZXN0OiAnY2hyb21lZHJpdmVyRXhlY3V0YWJsZScsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGhlbHA6ICdDaHJvbWVEcml2ZXIgZXhlY3V0YWJsZSBmdWxsIHBhdGgnLFxuICB9XSxcblxuICBbWyctLXNob3ctY29uZmlnJ10sIHtcbiAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgIGRlc3Q6ICdzaG93Q29uZmlnJyxcbiAgICBhY3Rpb246ICdzdG9yZVRydWUnLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBoZWxwOiAnU2hvdyBpbmZvIGFib3V0IHRoZSBhcHBpdW0gc2VydmVyIGNvbmZpZ3VyYXRpb24gYW5kIGV4aXQnLFxuICB9XSxcblxuICBbWyctLW5vLXBlcm1zLWNoZWNrJ10sIHtcbiAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgIGRlc3Q6ICdub1Blcm1zQ2hlY2snLFxuICAgIGFjdGlvbjogJ3N0b3JlVHJ1ZScsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGhlbHA6ICdCeXBhc3MgQXBwaXVtXFwncyBjaGVja3MgdG8gZW5zdXJlIHdlIGNhbiByZWFkL3dyaXRlIG5lY2Vzc2FyeSBmaWxlcycsXG4gIH1dLFxuXG4gIFtbJy0tc3RyaWN0LWNhcHMnXSwge1xuICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgZGVzdDogJ2VuZm9yY2VTdHJpY3RDYXBzJyxcbiAgICBhY3Rpb246ICdzdG9yZVRydWUnLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBoZWxwOiAnQ2F1c2Ugc2Vzc2lvbnMgdG8gZmFpbCBpZiBkZXNpcmVkIGNhcHMgYXJlIHNlbnQgaW4gdGhhdCBBcHBpdW0gJyArXG4gICAgICAgICAgJ2RvZXMgbm90IHJlY29nbml6ZSBhcyB2YWxpZCBmb3IgdGhlIHNlbGVjdGVkIGRldmljZScsXG4gICAgbmFyZ3M6IDAsXG4gIH1dLFxuXG4gIFtbJy0taXNvbGF0ZS1zaW0tZGV2aWNlJ10sIHtcbiAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgIGRlc3Q6ICdpc29sYXRlU2ltRGV2aWNlJyxcbiAgICBhY3Rpb246ICdzdG9yZVRydWUnLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBoZWxwOiAnWGNvZGUgNiBoYXMgYSBidWcgb24gc29tZSBwbGF0Zm9ybXMgd2hlcmUgYSBjZXJ0YWluIHNpbXVsYXRvciAnICtcbiAgICAgICAgICAnY2FuIG9ubHkgYmUgbGF1bmNoZWQgd2l0aG91dCBlcnJvciBpZiBhbGwgb3RoZXIgc2ltdWxhdG9yIGRldmljZXMgJyArXG4gICAgICAgICAgJ2FyZSBmaXJzdCBkZWxldGVkLiBUaGlzIG9wdGlvbiBjYXVzZXMgQXBwaXVtIHRvIGRlbGV0ZSBhbGwgJyArXG4gICAgICAgICAgJ2RldmljZXMgb3RoZXIgdGhhbiB0aGUgb25lIGJlaW5nIHVzZWQgYnkgQXBwaXVtLiBOb3RlIHRoYXQgdGhpcyAnICtcbiAgICAgICAgICAnaXMgYSBwZXJtYW5lbnQgZGVsZXRpb24sIGFuZCB5b3UgYXJlIHJlc3BvbnNpYmxlIGZvciB1c2luZyBzaW1jdGwgJyArXG4gICAgICAgICAgJ29yIHhjb2RlIHRvIG1hbmFnZSB0aGUgY2F0ZWdvcmllcyBvZiBkZXZpY2VzIHVzZWQgd2l0aCBBcHBpdW0uJyxcbiAgICBuYXJnczogMCxcbiAgfV0sXG5cbiAgW1snLS10bXAnXSwge1xuICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICBkZXN0OiAndG1wRGlyJyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgaGVscDogJ0Fic29sdXRlIHBhdGggdG8gZGlyZWN0b3J5IEFwcGl1bSBjYW4gdXNlIHRvIG1hbmFnZSB0ZW1wb3JhcnkgJyArXG4gICAgICAgICAgJ2ZpbGVzLCBsaWtlIGJ1aWx0LWluIGlPUyBhcHBzIGl0IG5lZWRzIHRvIG1vdmUgYXJvdW5kLiBPbiAqbml4L01hYyAnICtcbiAgICAgICAgICAnZGVmYXVsdHMgdG8gL3RtcCwgb24gV2luZG93cyBkZWZhdWx0cyB0byBDOlxcXFxXaW5kb3dzXFxcXFRlbXAnLFxuICB9XSxcblxuICBbWyctLXRyYWNlLWRpciddLCB7XG4gICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgIGRlc3Q6ICd0cmFjZURpcicsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGhlbHA6ICdBYnNvbHV0ZSBwYXRoIHRvIGRpcmVjdG9yeSBBcHBpdW0gdXNlIHRvIHNhdmUgaW9zIGluc3RydW1lbnRzICcgK1xuICAgICAgICAgICd0cmFjZXMsIGRlZmF1bHRzIHRvIDx0bXAgZGlyPi9hcHBpdW0taW5zdHJ1bWVudHMnLFxuICB9XSxcblxuICBbWyctLWRlYnVnLWxvZy1zcGFjaW5nJ10sIHtcbiAgICBkZXN0OiAnZGVidWdMb2dTcGFjaW5nJyxcbiAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgIGFjdGlvbjogJ3N0b3JlVHJ1ZScsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGhlbHA6ICdBZGQgZXhhZ2dlcmF0ZWQgc3BhY2luZyBpbiBsb2dzIHRvIGhlbHAgd2l0aCB2aXN1YWwgaW5zcGVjdGlvbicsXG4gIH1dLFxuXG4gIFtbJy0tc3VwcHJlc3MtYWRiLWtpbGwtc2VydmVyJ10sIHtcbiAgICBkZXN0OiAnc3VwcHJlc3NLaWxsU2VydmVyJyxcbiAgICBkZWZhdWx0VmFsdWU6IHRydWUsXG4gICAgYWN0aW9uOiAnc3RvcmVUcnVlJyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgaGVscDogJyhBbmRyb2lkLW9ubHkpIElmIHNldCwgcHJldmVudHMgQXBwaXVtIGZyb20ga2lsbGluZyB0aGUgYWRiIHNlcnZlciBpbnN0YW5jZScsXG4gICAgbmFyZ3M6IDAsXG4gIH1dLFxuXG4gIFtbJy0tYXN5bmMtdHJhY2UnXSwge1xuICAgIGRlc3Q6ICdhc3luY1RyYWNlJyxcbiAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBhY3Rpb246ICdzdG9yZVRydWUnLFxuICAgIGhlbHA6ICdBZGQgbG9uZyBzdGFjayB0cmFjZXMgdG8gbG9nIGVudHJpZXMuIFJlY29tbWVuZGVkIGZvciBkZWJ1Z2dpbmcgb25seS4nLFxuICB9XSxcblxuICBbWyctLXdlYmtpdC1kZWJ1Zy1wcm94eS1wb3J0J10sIHtcbiAgICBkZWZhdWx0VmFsdWU6IDI3NzUzLFxuICAgIGRlc3Q6ICd3ZWJraXREZWJ1Z1Byb3h5UG9ydCcsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIHR5cGU6ICdpbnQnLFxuICAgIGV4YW1wbGU6IFwiMjc3NTNcIixcbiAgICBoZWxwOiAnKElPUy1vbmx5KSBMb2NhbCBwb3J0IHVzZWQgZm9yIGNvbW11bmljYXRpb24gd2l0aCBpb3Mtd2Via2l0LWRlYnVnLXByb3h5J1xuICB9XSxcblxuICBbWyctLXdlYmRyaXZlcmFnZW50LXBvcnQnXSwge1xuICAgIGRlZmF1bHRWYWx1ZTogODEwMCxcbiAgICBkZXN0OiAnd2RhTG9jYWxQb3J0JyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgdHlwZTogJ2ludCcsXG4gICAgZXhhbXBsZTogXCI4MTAwXCIsXG4gICAgaGVscDogJyhJT1Mtb25seSwgWENVSVRlc3Qtb25seSkgTG9jYWwgcG9ydCB1c2VkIGZvciBjb21tdW5pY2F0aW9uIHdpdGggV2ViRHJpdmVyQWdlbnQnXG4gIH1dLFxuXG4gIFtbJy1kYycsICctLWRlZmF1bHQtY2FwYWJpbGl0aWVzJ10sIHtcbiAgICBkZXN0OiAnZGVmYXVsdENhcGFiaWxpdGllcycsXG4gICAgZGVmYXVsdFZhbHVlOiB7fSxcbiAgICB0eXBlOiBwYXJzZURlZmF1bHRDYXBzLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBleGFtcGxlOiAnWyBcXCd7XCJhcHBcIjogXCJteWFwcC5hcHBcIiwgXCJkZXZpY2VOYW1lXCI6IFwiaVBob25lIFNpbXVsYXRvclwifVxcJyAnICtcbiAgICAgICAgICAgICAnfCAvcGF0aC90by9jYXBzLmpzb24gXScsXG4gICAgaGVscDogJ1NldCB0aGUgZGVmYXVsdCBkZXNpcmVkIGNhcGFiaWxpdGllcywgd2hpY2ggd2lsbCBiZSBzZXQgb24gZWFjaCAnICtcbiAgICAgICAgICAnc2Vzc2lvbiB1bmxlc3Mgb3ZlcnJpZGRlbiBieSByZWNlaXZlZCBjYXBhYmlsaXRpZXMuJ1xuICB9XSxcbl07XG5cbmNvbnN0IGRlcHJlY2F0ZWRBcmdzID0gW1xuICBbWyctLWNvbW1hbmQtdGltZW91dCddLCB7XG4gICAgZGVmYXVsdFZhbHVlOiA2MCxcbiAgICBkZXN0OiAnZGVmYXVsdENvbW1hbmRUaW1lb3V0JyxcbiAgICB0eXBlOiAnaW50JyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgaGVscDogJ1tERVBSRUNBVEVEXSBObyBlZmZlY3QuIFRoaXMgdXNlZCB0byBiZSB0aGUgZGVmYXVsdCBjb21tYW5kICcgK1xuICAgICAgICAgICd0aW1lb3V0IGZvciB0aGUgc2VydmVyIHRvIHVzZSBmb3IgYWxsIHNlc3Npb25zIChpbiBzZWNvbmRzIGFuZCAnICtcbiAgICAgICAgICAnc2hvdWxkIGJlIGxlc3MgdGhhbiAyMTQ3NDgzKS4gVXNlIG5ld0NvbW1hbmRUaW1lb3V0IGNhcCBpbnN0ZWFkJ1xuICB9XSxcblxuICBbWyctaycsICctLWtlZXAtYXJ0aWZhY3RzJ10sIHtcbiAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgIGRlc3Q6ICdrZWVwQXJ0aWZhY3RzJyxcbiAgICBhY3Rpb246ICdzdG9yZVRydWUnLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBoZWxwOiAnW0RFUFJFQ0FURURdIC0gbm8gZWZmZWN0LCB0cmFjZSBpcyBub3cgaW4gdG1wIGRpciBieSBkZWZhdWx0IGFuZCBpcyAnICtcbiAgICAgICAgICAnY2xlYXJlZCBiZWZvcmUgZWFjaCBydW4uIFBsZWFzZSBhbHNvIHJlZmVyIHRvIHRoZSAtLXRyYWNlLWRpciBmbGFnLicsXG4gICAgbmFyZ3M6IDAsXG4gIH1dLFxuXG4gIFtbJy0tcGxhdGZvcm0tbmFtZSddLCB7XG4gICAgZGVzdDogJ3BsYXRmb3JtTmFtZScsXG4gICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBkZXByZWNhdGVkRm9yOiAnLS1kZWZhdWx0LWNhcGFiaWxpdGllcycsXG4gICAgZXhhbXBsZTogJ2lPUycsXG4gICAgaGVscDogJ1tERVBSRUNBVEVEXSAtIE5hbWUgb2YgdGhlIG1vYmlsZSBwbGF0Zm9ybTogaU9TLCBBbmRyb2lkLCBvciBGaXJlZm94T1MnLFxuICB9XSxcblxuICBbWyctLXBsYXRmb3JtLXZlcnNpb24nXSwge1xuICAgIGRlc3Q6ICdwbGF0Zm9ybVZlcnNpb24nLFxuICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZGVwcmVjYXRlZEZvcjogJy0tZGVmYXVsdC1jYXBhYmlsaXRpZXMnLFxuICAgIGV4YW1wbGU6ICc3LjEnLFxuICAgIGhlbHA6ICdbREVQUkVDQVRFRF0gLSBWZXJzaW9uIG9mIHRoZSBtb2JpbGUgcGxhdGZvcm0nLFxuICB9XSxcblxuICBbWyctLWF1dG9tYXRpb24tbmFtZSddLCB7XG4gICAgZGVzdDogJ2F1dG9tYXRpb25OYW1lJyxcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGRlcHJlY2F0ZWRGb3I6ICctLWRlZmF1bHQtY2FwYWJpbGl0aWVzJyxcbiAgICBleGFtcGxlOiAnQXBwaXVtJyxcbiAgICBoZWxwOiAnW0RFUFJFQ0FURURdIC0gTmFtZSBvZiB0aGUgYXV0b21hdGlvbiB0b29sOiBBcHBpdW0gb3IgU2VsZW5kcm9pZCcsXG4gIH1dLFxuXG4gIFtbJy0tZGV2aWNlLW5hbWUnXSwge1xuICAgIGRlc3Q6ICdkZXZpY2VOYW1lJyxcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGRlcHJlY2F0ZWRGb3I6ICctLWRlZmF1bHQtY2FwYWJpbGl0aWVzJyxcbiAgICBleGFtcGxlOiAnaVBob25lIFJldGluYSAoNC1pbmNoKSwgQW5kcm9pZCBFbXVsYXRvcicsXG4gICAgaGVscDogJ1tERVBSRUNBVEVEXSAtIE5hbWUgb2YgdGhlIG1vYmlsZSBkZXZpY2UgdG8gdXNlJyxcbiAgfV0sXG5cbiAgW1snLS1icm93c2VyLW5hbWUnXSwge1xuICAgIGRlc3Q6ICdicm93c2VyTmFtZScsXG4gICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBkZXByZWNhdGVkRm9yOiAnLS1kZWZhdWx0LWNhcGFiaWxpdGllcycsXG4gICAgZXhhbXBsZTogJ1NhZmFyaScsXG4gICAgaGVscDogJ1tERVBSRUNBVEVEXSAtIE5hbWUgb2YgdGhlIG1vYmlsZSBicm93c2VyOiBTYWZhcmkgb3IgQ2hyb21lJyxcbiAgfV0sXG5cbiAgW1snLS1hcHAnXSwge1xuICAgIGRlc3Q6ICdhcHAnLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgZGVwcmVjYXRlZEZvcjogJy0tZGVmYXVsdC1jYXBhYmlsaXRpZXMnLFxuICAgIGhlbHA6ICdbREVQUkVDQVRFRF0gLSBJT1M6IGFicyBwYXRoIHRvIHNpbXVsYXRvci1jb21waWxlZCAuYXBwIGZpbGUgb3IgdGhlIGJ1bmRsZV9pZCBvZiB0aGUgZGVzaXJlZCB0YXJnZXQgb24gZGV2aWNlOyBBbmRyb2lkOiBhYnMgcGF0aCB0byAuYXBrIGZpbGUnLFxuICAgIGV4YW1wbGU6ICcvYWJzL3BhdGgvdG8vbXkuYXBwJyxcbiAgfV0sXG5cbiAgW1snLWx0JywgJy0tbGF1bmNoLXRpbWVvdXQnXSwge1xuICAgIGRlZmF1bHRWYWx1ZTogOTAwMDAsXG4gICAgZGVzdDogJ2xhdW5jaFRpbWVvdXQnLFxuICAgIHR5cGU6ICdpbnQnLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBkZXByZWNhdGVkRm9yOiAnLS1kZWZhdWx0LWNhcGFiaWxpdGllcycsXG4gICAgaGVscDogJ1tERVBSRUNBVEVEXSAtIChpT1Mtb25seSkgaG93IGxvbmcgaW4gbXMgdG8gd2FpdCBmb3IgSW5zdHJ1bWVudHMgdG8gbGF1bmNoJyxcbiAgfV0sXG5cbiAgW1snLS1sYW5ndWFnZSddLCB7XG4gICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgIGRlc3Q6ICdsYW5ndWFnZScsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGV4YW1wbGU6ICdlbicsXG4gICAgZGVwcmVjYXRlZEZvcjogJy0tZGVmYXVsdC1jYXBhYmlsaXRpZXMnLFxuICAgIGhlbHA6ICdbREVQUkVDQVRFRF0gLSBMYW5ndWFnZSBmb3IgdGhlIGlPUyBzaW11bGF0b3IgLyBBbmRyb2lkIEVtdWxhdG9yJyxcbiAgfV0sXG5cbiAgW1snLS1sb2NhbGUnXSwge1xuICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICBkZXN0OiAnbG9jYWxlJyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZXhhbXBsZTogJ2VuX1VTJyxcbiAgICBkZXByZWNhdGVkRm9yOiAnLS1kZWZhdWx0LWNhcGFiaWxpdGllcycsXG4gICAgaGVscDogJ1tERVBSRUNBVEVEXSAtIExvY2FsZSBmb3IgdGhlIGlPUyBzaW11bGF0b3IgLyBBbmRyb2lkIEVtdWxhdG9yJyxcbiAgfV0sXG5cbiAgW1snLVUnLCAnLS11ZGlkJ10sIHtcbiAgICBkZXN0OiAndWRpZCcsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICBleGFtcGxlOiAnMWFkc2Ytc2RmYXMtYXNkZi0xMjNzZGYnLFxuICAgIGRlcHJlY2F0ZWRGb3I6ICctLWRlZmF1bHQtY2FwYWJpbGl0aWVzJyxcbiAgICBoZWxwOiAnW0RFUFJFQ0FURURdIC0gVW5pcXVlIGRldmljZSBpZGVudGlmaWVyIG9mIHRoZSBjb25uZWN0ZWQgcGh5c2ljYWwgZGV2aWNlJyxcbiAgfV0sXG5cbiAgW1snLS1vcmllbnRhdGlvbiddLCB7XG4gICAgZGVzdDogJ29yaWVudGF0aW9uJyxcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGV4YW1wbGU6ICdMQU5EU0NBUEUnLFxuICAgIGRlcHJlY2F0ZWRGb3I6ICctLWRlZmF1bHQtY2FwYWJpbGl0aWVzJyxcbiAgICBoZWxwOiAnW0RFUFJFQ0FURURdIC0gKElPUy1vbmx5KSB1c2UgTEFORFNDQVBFIG9yIFBPUlRSQUlUIHRvIGluaXRpYWxpemUgYWxsIHJlcXVlc3RzICcgK1xuICAgICAgICAgICd0byB0aGlzIG9yaWVudGF0aW9uJyxcbiAgfV0sXG5cbiAgW1snLS1uby1yZXNldCddLCB7XG4gICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICBkZXN0OiAnbm9SZXNldCcsXG4gICAgYWN0aW9uOiAnc3RvcmVUcnVlJyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZGVwcmVjYXRlZEZvcjogJy0tZGVmYXVsdC1jYXBhYmlsaXRpZXMnLFxuICAgIGhlbHA6ICdbREVQUkVDQVRFRF0gLSBEbyBub3QgcmVzZXQgYXBwIHN0YXRlIGJldHdlZW4gc2Vzc2lvbnMgKElPUzogZG8gbm90IGRlbGV0ZSBhcHAgJyArXG4gICAgICAgICAgJ3BsaXN0IGZpbGVzOyBBbmRyb2lkOiBkbyBub3QgdW5pbnN0YWxsIGFwcCBiZWZvcmUgbmV3IHNlc3Npb24pJyxcbiAgICBuYXJnczogMCxcbiAgfV0sXG5cbiAgW1snLS1mdWxsLXJlc2V0J10sIHtcbiAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgIGRlc3Q6ICdmdWxsUmVzZXQnLFxuICAgIGFjdGlvbjogJ3N0b3JlVHJ1ZScsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGRlcHJlY2F0ZWRGb3I6ICctLWRlZmF1bHQtY2FwYWJpbGl0aWVzJyxcbiAgICBoZWxwOiAnW0RFUFJFQ0FURURdIC0gKGlPUykgRGVsZXRlIHRoZSBlbnRpcmUgc2ltdWxhdG9yIGZvbGRlci4gKEFuZHJvaWQpIFJlc2V0IGFwcCAnICtcbiAgICAgICAgICAnc3RhdGUgYnkgdW5pbnN0YWxsaW5nIGFwcCBpbnN0ZWFkIG9mIGNsZWFyaW5nIGFwcCBkYXRhLiBPbiAnICtcbiAgICAgICAgICAnQW5kcm9pZCwgdGhpcyB3aWxsIGFsc28gcmVtb3ZlIHRoZSBhcHAgYWZ0ZXIgdGhlIHNlc3Npb24gaXMgY29tcGxldGUuJyxcbiAgICBuYXJnczogMCxcbiAgfV0sXG5cbiAgW1snLS1hcHAtcGtnJ10sIHtcbiAgICBkZXN0OiAnYXBwUGFja2FnZScsXG4gICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBkZXByZWNhdGVkRm9yOiAnLS1kZWZhdWx0LWNhcGFiaWxpdGllcycsXG4gICAgZXhhbXBsZTogJ2NvbS5leGFtcGxlLmFuZHJvaWQubXlBcHAnLFxuICAgIGhlbHA6ICdbREVQUkVDQVRFRF0gLSAoQW5kcm9pZC1vbmx5KSBKYXZhIHBhY2thZ2Ugb2YgdGhlIEFuZHJvaWQgYXBwIHlvdSB3YW50IHRvIHJ1biAnICtcbiAgICAgICAgICAnKGUuZy4sIGNvbS5leGFtcGxlLmFuZHJvaWQubXlBcHApJyxcbiAgfV0sXG5cbiAgW1snLS1hcHAtYWN0aXZpdHknXSwge1xuICAgIGRlc3Q6ICdhcHBBY3Rpdml0eScsXG4gICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBleGFtcGxlOiAnTWFpbkFjdGl2aXR5JyxcbiAgICBkZXByZWNhdGVkRm9yOiAnLS1kZWZhdWx0LWNhcGFiaWxpdGllcycsXG4gICAgaGVscDogJ1tERVBSRUNBVEVEXSAtIChBbmRyb2lkLW9ubHkpIEFjdGl2aXR5IG5hbWUgZm9yIHRoZSBBbmRyb2lkIGFjdGl2aXR5IHlvdSB3YW50ICcgK1xuICAgICAgICAgICd0byBsYXVuY2ggZnJvbSB5b3VyIHBhY2thZ2UgKGUuZy4sIE1haW5BY3Rpdml0eSknLFxuICB9XSxcblxuICBbWyctLWFwcC13YWl0LXBhY2thZ2UnXSwge1xuICAgIGRlc3Q6ICdhcHBXYWl0UGFja2FnZScsXG4gICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZXhhbXBsZTogJ2NvbS5leGFtcGxlLmFuZHJvaWQubXlBcHAnLFxuICAgIGRlcHJlY2F0ZWRGb3I6ICctLWRlZmF1bHQtY2FwYWJpbGl0aWVzJyxcbiAgICBoZWxwOiAnW0RFUFJFQ0FURURdIC0gKEFuZHJvaWQtb25seSkgUGFja2FnZSBuYW1lIGZvciB0aGUgQW5kcm9pZCBhY3Rpdml0eSB5b3Ugd2FudCAnICtcbiAgICAgICAgICAndG8gd2FpdCBmb3IgKGUuZy4sIGNvbS5leGFtcGxlLmFuZHJvaWQubXlBcHApJyxcbiAgfV0sXG5cbiAgW1snLS1hcHAtd2FpdC1hY3Rpdml0eSddLCB7XG4gICAgZGVzdDogJ2FwcFdhaXRBY3Rpdml0eScsXG4gICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZXhhbXBsZTogJ1NwbGFzaEFjdGl2aXR5JyxcbiAgICBkZXByZWNhdGVkRm9yOiAnLS1kZWZhdWx0LWNhcGFiaWxpdGllcycsXG4gICAgaGVscDogJ1tERVBSRUNBVEVEXSAtIChBbmRyb2lkLW9ubHkpIEFjdGl2aXR5IG5hbWUgZm9yIHRoZSBBbmRyb2lkIGFjdGl2aXR5IHlvdSB3YW50ICcgK1xuICAgICAgICAgICd0byB3YWl0IGZvciAoZS5nLiwgU3BsYXNoQWN0aXZpdHkpJyxcbiAgfV0sXG5cbiAgW1snLS1kZXZpY2UtcmVhZHktdGltZW91dCddLCB7XG4gICAgZGVzdDogJ2RldmljZVJlYWR5VGltZW91dCcsXG4gICAgZGVmYXVsdFZhbHVlOiA1LFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB0eXBlOiAnaW50JyxcbiAgICBleGFtcGxlOiAnNScsXG4gICAgZGVwcmVjYXRlZEZvcjogJy0tZGVmYXVsdC1jYXBhYmlsaXRpZXMnLFxuICAgIGhlbHA6ICdbREVQUkVDQVRFRF0gLSAoQW5kcm9pZC1vbmx5KSBUaW1lb3V0IGluIHNlY29uZHMgd2hpbGUgd2FpdGluZyBmb3IgZGV2aWNlIHRvIGJlY29tZSByZWFkeScsXG4gIH1dLFxuXG4gIFtbJy0tYW5kcm9pZC1jb3ZlcmFnZSddLCB7XG4gICAgZGVzdDogJ2FuZHJvaWRDb3ZlcmFnZScsXG4gICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZXhhbXBsZTogJ2NvbS5teS5Qa2cvY29tLm15LlBrZy5pbnN0cnVtZW50YXRpb24uTXlJbnN0cnVtZW50YXRpb24nLFxuICAgIGRlcHJlY2F0ZWRGb3I6ICctLWRlZmF1bHQtY2FwYWJpbGl0aWVzJyxcbiAgICBoZWxwOiAnW0RFUFJFQ0FURURdIC0gKEFuZHJvaWQtb25seSkgRnVsbHkgcXVhbGlmaWVkIGluc3RydW1lbnRhdGlvbiBjbGFzcy4gUGFzc2VkIHRvIC13IGluICcgK1xuICAgICAgICAgICdhZGIgc2hlbGwgYW0gaW5zdHJ1bWVudCAtZSBjb3ZlcmFnZSB0cnVlIC13ICcsXG4gIH1dLFxuXG4gIFtbJy0tYXZkJ10sIHtcbiAgICBkZXN0OiAnYXZkJyxcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGV4YW1wbGU6ICdAZGVmYXVsdCcsXG4gICAgZGVwcmVjYXRlZEZvcjogJy0tZGVmYXVsdC1jYXBhYmlsaXRpZXMnLFxuICAgIGhlbHA6ICdbREVQUkVDQVRFRF0gLSAoQW5kcm9pZC1vbmx5KSBOYW1lIG9mIHRoZSBhdmQgdG8gbGF1bmNoJyxcbiAgfV0sXG5cbiAgW1snLS1hdmQtYXJncyddLCB7XG4gICAgZGVzdDogJ2F2ZEFyZ3MnLFxuICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZXhhbXBsZTogJy1uby1zbmFwc2hvdC1sb2FkJyxcbiAgICBkZXByZWNhdGVkRm9yOiAnLS1kZWZhdWx0LWNhcGFiaWxpdGllcycsXG4gICAgaGVscDogJ1tERVBSRUNBVEVEXSAtIChBbmRyb2lkLW9ubHkpIEFkZGl0aW9uYWwgZW11bGF0b3IgYXJndW1lbnRzIHRvIGxhdW5jaCB0aGUgYXZkJyxcbiAgfV0sXG5cbiAgW1snLS11c2Uta2V5c3RvcmUnXSwge1xuICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgZGVzdDogJ3VzZUtleXN0b3JlJyxcbiAgICBhY3Rpb246ICdzdG9yZVRydWUnLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBkZXByZWNhdGVkRm9yOiAnLS1kZWZhdWx0LWNhcGFiaWxpdGllcycsXG4gICAgaGVscDogJ1tERVBSRUNBVEVEXSAtIChBbmRyb2lkLW9ubHkpIFdoZW4gc2V0IHRoZSBrZXlzdG9yZSB3aWxsIGJlIHVzZWQgdG8gc2lnbiBhcGtzLicsXG4gIH1dLFxuXG4gIFtbJy0ta2V5c3RvcmUtcGF0aCddLCB7XG4gICAgZGVmYXVsdFZhbHVlOiBwYXRoLnJlc29sdmUocHJvY2Vzcy5lbnYuSE9NRSB8fCBwcm9jZXNzLmVudi5VU0VSUFJPRklMRSB8fCAnJywgJy5hbmRyb2lkJywgJ2RlYnVnLmtleXN0b3JlJyksXG4gICAgZGVzdDogJ2tleXN0b3JlUGF0aCcsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGRlcHJlY2F0ZWRGb3I6ICctLWRlZmF1bHQtY2FwYWJpbGl0aWVzJyxcbiAgICBoZWxwOiAnW0RFUFJFQ0FURURdIC0gKEFuZHJvaWQtb25seSkgUGF0aCB0byBrZXlzdG9yZScsXG4gIH1dLFxuXG4gIFtbJy0ta2V5c3RvcmUtcGFzc3dvcmQnXSwge1xuICAgIGRlZmF1bHRWYWx1ZTogJ2FuZHJvaWQnLFxuICAgIGRlc3Q6ICdrZXlzdG9yZVBhc3N3b3JkJyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZGVwcmVjYXRlZEZvcjogJy0tZGVmYXVsdC1jYXBhYmlsaXRpZXMnLFxuICAgIGhlbHA6ICdbREVQUkVDQVRFRF0gLSAoQW5kcm9pZC1vbmx5KSBQYXNzd29yZCB0byBrZXlzdG9yZScsXG4gIH1dLFxuXG4gIFtbJy0ta2V5LWFsaWFzJ10sIHtcbiAgICBkZWZhdWx0VmFsdWU6ICdhbmRyb2lkZGVidWdrZXknLFxuICAgIGRlc3Q6ICdrZXlBbGlhcycsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGRlcHJlY2F0ZWRGb3I6ICctLWRlZmF1bHQtY2FwYWJpbGl0aWVzJyxcbiAgICBoZWxwOiAnW0RFUFJFQ0FURURdIC0gKEFuZHJvaWQtb25seSkgS2V5IGFsaWFzJyxcbiAgfV0sXG5cbiAgW1snLS1rZXktcGFzc3dvcmQnXSwge1xuICAgIGRlZmF1bHRWYWx1ZTogJ2FuZHJvaWQnLFxuICAgIGRlc3Q6ICdrZXlQYXNzd29yZCcsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGRlcHJlY2F0ZWRGb3I6ICctLWRlZmF1bHQtY2FwYWJpbGl0aWVzJyxcbiAgICBoZWxwOiAnW0RFUFJFQ0FURURdIC0gKEFuZHJvaWQtb25seSkgS2V5IHBhc3N3b3JkJyxcbiAgfV0sXG5cbiAgW1snLS1pbnRlbnQtYWN0aW9uJ10sIHtcbiAgICBkZXN0OiAnaW50ZW50QWN0aW9uJyxcbiAgICBkZWZhdWx0VmFsdWU6ICdhbmRyb2lkLmludGVudC5hY3Rpb24uTUFJTicsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGV4YW1wbGU6ICdhbmRyb2lkLmludGVudC5hY3Rpb24uTUFJTicsXG4gICAgZGVwcmVjYXRlZEZvcjogJy0tZGVmYXVsdC1jYXBhYmlsaXRpZXMnLFxuICAgIGhlbHA6ICdbREVQUkVDQVRFRF0gLSAoQW5kcm9pZC1vbmx5KSBJbnRlbnQgYWN0aW9uIHdoaWNoIHdpbGwgYmUgdXNlZCB0byBzdGFydCBhY3Rpdml0eScsXG4gIH1dLFxuXG4gIFtbJy0taW50ZW50LWNhdGVnb3J5J10sIHtcbiAgICBkZXN0OiAnaW50ZW50Q2F0ZWdvcnknLFxuICAgIGRlZmF1bHRWYWx1ZTogJ2FuZHJvaWQuaW50ZW50LmNhdGVnb3J5LkxBVU5DSEVSJyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZXhhbXBsZTogJ2FuZHJvaWQuaW50ZW50LmNhdGVnb3J5LkFQUF9DT05UQUNUUycsXG4gICAgZGVwcmVjYXRlZEZvcjogJy0tZGVmYXVsdC1jYXBhYmlsaXRpZXMnLFxuICAgIGhlbHA6ICdbREVQUkVDQVRFRF0gLSAoQW5kcm9pZC1vbmx5KSBJbnRlbnQgY2F0ZWdvcnkgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIHN0YXJ0IGFjdGl2aXR5JyxcbiAgfV0sXG5cbiAgW1snLS1pbnRlbnQtZmxhZ3MnXSwge1xuICAgIGRlc3Q6ICdpbnRlbnRGbGFncycsXG4gICAgZGVmYXVsdFZhbHVlOiAnMHgxMDIwMDAwMCcsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGV4YW1wbGU6ICcweDEwMjAwMDAwJyxcbiAgICBkZXByZWNhdGVkRm9yOiAnLS1kZWZhdWx0LWNhcGFiaWxpdGllcycsXG4gICAgaGVscDogJ1tERVBSRUNBVEVEXSAtIChBbmRyb2lkLW9ubHkpIEZsYWdzIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHN0YXJ0IGFjdGl2aXR5JyxcbiAgfV0sXG5cbiAgW1snLS1pbnRlbnQtYXJncyddLCB7XG4gICAgZGVzdDogJ29wdGlvbmFsSW50ZW50QXJndW1lbnRzJyxcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGV4YW1wbGU6ICcweDEwMjAwMDAwJyxcbiAgICBkZXByZWNhdGVkRm9yOiAnLS1kZWZhdWx0LWNhcGFiaWxpdGllcycsXG4gICAgaGVscDogJ1tERVBSRUNBVEVEXSAtIChBbmRyb2lkLW9ubHkpIEFkZGl0aW9uYWwgaW50ZW50IGFyZ3VtZW50cyB0aGF0IHdpbGwgYmUgdXNlZCB0byAnICtcbiAgICAgICAgICAnc3RhcnQgYWN0aXZpdHknLFxuICB9XSxcblxuICBbWyctLWRvbnQtc3RvcC1hcHAtb24tcmVzZXQnXSwge1xuICAgIGRlc3Q6ICdkb250U3RvcEFwcE9uUmVzZXQnLFxuICAgIGRlZmF1bHRWYWx1ZTogdHJ1ZSxcbiAgICBhY3Rpb246ICdzdG9yZVRydWUnLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBkZXByZWNhdGVkRm9yOiAnLS1kZWZhdWx0LWNhcGFiaWxpdGllcycsXG4gICAgaGVscDogJ1tERVBSRUNBVEVEXSAtIChBbmRyb2lkLW9ubHkpIFdoZW4gaW5jbHVkZWQsIHJlZnJhaW5zIGZyb20gc3RvcHBpbmcgdGhlIGFwcCBiZWZvcmUgcmVzdGFydCcsXG4gIH1dLFxuXG4gIFtbJy0tY2FsZW5kYXItZm9ybWF0J10sIHtcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgZGVzdDogJ2NhbGVuZGFyRm9ybWF0JyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZXhhbXBsZTogJ2dyZWdvcmlhbicsXG4gICAgZGVwcmVjYXRlZEZvcjogJy0tZGVmYXVsdC1jYXBhYmlsaXRpZXMnLFxuICAgIGhlbHA6ICdbREVQUkVDQVRFRF0gLSAoSU9TLW9ubHkpIGNhbGVuZGFyIGZvcm1hdCBmb3IgdGhlIGlPUyBzaW11bGF0b3InLFxuICB9XSxcblxuICBbWyctLW5hdGl2ZS1pbnN0cnVtZW50cy1saWInXSwge1xuICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgZGVzdDogJ25hdGl2ZUluc3RydW1lbnRzTGliJyxcbiAgICBhY3Rpb246ICdzdG9yZVRydWUnLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBkZXByZWNhdGVkRm9yOiAnLS1kZWZhdWx0LWNhcGFiaWxpdGllcycsXG4gICAgaGVscDogJ1tERVBSRUNBVEVEXSAtIChJT1Mtb25seSkgSU9TIGhhcyBhIHdlaXJkIGJ1aWx0LWluIHVuYXZvaWRhYmxlICcgK1xuICAgICAgICAgICdkZWxheS4gV2UgcGF0Y2ggdGhpcyBpbiBhcHBpdW0uIElmIHlvdSBkbyBub3Qgd2FudCBpdCBwYXRjaGVkLCAnICtcbiAgICAgICAgICAncGFzcyBpbiB0aGlzIGZsYWcuJyxcbiAgICBuYXJnczogMCxcbiAgfV0sXG5cbiAgW1snLS1rZWVwLWtleWNoYWlucyddLCB7XG4gICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICBkZXN0OiAna2VlcEtleUNoYWlucycsXG4gICAgYWN0aW9uOiAnc3RvcmVUcnVlJyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgZGVwcmVjYXRlZEZvcjogJy0tZGVmYXVsdC1jYXBhYmlsaXRpZXMnLFxuICAgIGhlbHA6ICdbREVQUkVDQVRFRF0gLSAoaU9TLW9ubHkpIFdoZXRoZXIgdG8ga2VlcCBrZXljaGFpbnMgKExpYnJhcnkvS2V5Y2hhaW5zKSB3aGVuIHJlc2V0IGFwcCBiZXR3ZWVuIHNlc3Npb25zJyxcbiAgICBuYXJnczogMCxcbiAgfV0sXG5cbiAgW1snLS1sb2NhbGl6YWJsZS1zdHJpbmdzLWRpciddLCB7XG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGRlc3Q6ICdsb2NhbGl6YWJsZVN0cmluZ3NEaXInLFxuICAgIGRlZmF1bHRWYWx1ZTogJ2VuLmxwcm9qJyxcbiAgICBkZXByZWNhdGVkRm9yOiAnLS1kZWZhdWx0LWNhcGFiaWxpdGllcycsXG4gICAgaGVscDogJ1tERVBSRUNBVEVEXSAtIChJT1Mtb25seSkgdGhlIHJlbGF0aXZlIHBhdGggb2YgdGhlIGRpciB3aGVyZSBMb2NhbGl6YWJsZS5zdHJpbmdzIGZpbGUgcmVzaWRlcyAnLFxuICAgIGV4YW1wbGU6ICdlbi5scHJvaicsXG4gIH1dLFxuXG4gIFtbJy0tc2hvdy1pb3MtbG9nJ10sIHtcbiAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgIGRlc3Q6ICdzaG93SU9TTG9nJyxcbiAgICBhY3Rpb246ICdzdG9yZVRydWUnLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBkZXByZWNhdGVkRm9yOiAnLS1kZWZhdWx0LWNhcGFiaWxpdGllcycsXG4gICAgaGVscDogJ1tERVBSRUNBVEVEXSAtIChJT1Mtb25seSkgaWYgc2V0LCB0aGUgaU9TIHN5c3RlbSBsb2cgd2lsbCBiZSB3cml0dGVuIHRvIHRoZSBjb25zb2xlJyxcbiAgICBuYXJnczogMCxcbiAgfV0sXG5cbiAgW1snLS1lbmFibGUtaGVhcGR1bXAnXSwge1xuICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgZGVzdDogJ2hlYXBkdW1wRW5hYmxlZCcsXG4gICAgYWN0aW9uOiAnc3RvcmVUcnVlJyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgaGVscDogJ0VuYWJsZSBjb2xsZWN0aW9uIG9mIE5vZGVKUyBtZW1vcnkgaGVhcCBkdW1wcy4gVGhpcyBpcyB1c2VmdWwgZm9yIG1lbW9yeSBsZWFrcyBsb29rdXAnLFxuICAgIG5hcmdzOiAwXG4gIH1dXG5dO1xuXG5mdW5jdGlvbiB1cGRhdGVQYXJzZUFyZ3NGb3JEZWZhdWx0Q2FwYWJpbGl0aWVzIChwYXJzZXIpIHtcbiAgLy8gaGVyZSB3ZSB3YW50IHRvIHVwZGF0ZSB0aGUgcGFyc2VyLnBhcnNlQXJncygpIGZ1bmN0aW9uXG4gIC8vIGluIG9yZGVyIHRvIGJyaW5nIHRvZ2V0aGVyIGFsbCB0aGUgYXJncyB0aGF0IGFyZSBhY3R1YWxseVxuICAvLyBkZWZhdWx0IGNhcHMuXG4gIC8vIG9uY2UgdGhvc2UgZGVwcmVjYXRlZCBhcmdzIGFyZSBhY3R1YWxseSByZW1vdmVkLCB0aGlzXG4gIC8vIGNhbiBhbHNvIGJlIHJlbW92ZWRcbiAgcGFyc2VyLl9wYXJzZUFyZ3MgPSBwYXJzZXIucGFyc2VBcmdzO1xuICBwYXJzZXIucGFyc2VBcmdzID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICBsZXQgcGFyc2VkQXJncyA9IHBhcnNlci5fcGFyc2VBcmdzKGFyZ3MpO1xuICAgIHBhcnNlZEFyZ3MuZGVmYXVsdENhcGFiaWxpdGllcyA9IHBhcnNlZEFyZ3MuZGVmYXVsdENhcGFiaWxpdGllcyB8fCB7fTtcbiAgICBmb3IgKGxldCBhcmdFbnRyeSBvZiBkZXByZWNhdGVkQXJncykge1xuICAgICAgbGV0IGFyZyA9IGFyZ0VudHJ5WzFdLmRlc3Q7XG4gICAgICBpZiAoYXJnRW50cnlbMV0uZGVwcmVjYXRlZEZvciA9PT0gJy0tZGVmYXVsdC1jYXBhYmlsaXRpZXMnKSB7XG4gICAgICAgIGlmIChhcmcgaW4gcGFyc2VkQXJncyAmJiBwYXJzZWRBcmdzW2FyZ10gIT09IGFyZ0VudHJ5WzFdLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgIHBhcnNlZEFyZ3MuZGVmYXVsdENhcGFiaWxpdGllc1thcmddID0gcGFyc2VkQXJnc1thcmddO1xuICAgICAgICAgIC8vIGogcyBoIGkgbiB0IGNhbid0IGhhbmRsZSBjb21wbGV4IGludGVycG9sYXRlZCBzdHJpbmdzXG4gICAgICAgICAgbGV0IGNhcERpY3QgPSB7W2FyZ106IHBhcnNlZEFyZ3NbYXJnXX07XG4gICAgICAgICAgYXJnRW50cnlbMV0uZGVwcmVjYXRlZEZvciA9IGAtLWRlZmF1bHQtY2FwYWJpbGl0aWVzIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJyR7SlNPTi5zdHJpbmdpZnkoY2FwRGljdCl9J2A7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEFyZ3M7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGVmYXVsdENhcHMgKGNhcHMpIHtcbiAgdHJ5IHtcbiAgICAvLyB1c2Ugc3luY2hyb25vdXMgZmlsZSBhY2Nlc3MsIGFzIGBhcmdwYXJzZWAgcHJvdmlkZXMgbm8gd2F5IG9mIGVpdGhlclxuICAgIC8vIGF3YWl0aW5nIG9yIHVzaW5nIGNhbGxiYWNrcy4gVGhpcyBzdGVwIGhhcHBlbnMgaW4gc3RhcnR1cCwgaW4gd2hhdCBpc1xuICAgIC8vIGVmZmVjdGl2ZWx5IGNvbW1hbmQtbGluZSBjb2RlLCBzbyBub3RoaW5nIGlzIGJsb2NrZWQgaW4gdGVybXMgb2ZcbiAgICAvLyBzZXNzaW9ucywgc28gaG9sZGluZyB1cCB0aGUgZXZlbnQgbG9vcCBkb2VzIG5vdCBpbmN1ciB0aGUgdXN1YWxcbiAgICAvLyBkcmF3YmFja3MuXG4gICAgaWYgKGZzLnN0YXRTeW5jKGNhcHMpLmlzRmlsZSgpKSB7XG4gICAgICBjYXBzID0gZnMucmVhZEZpbGVTeW5jKGNhcHMsICd1dGY4Jyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBub3QgYSBmaWxlLCBvciBub3QgcmVhZGFibGVcbiAgfVxuICBjYXBzID0gSlNPTi5wYXJzZShjYXBzKTtcbiAgaWYgKCFfLmlzUGxhaW5PYmplY3QoY2FwcykpIHtcbiAgICB0aHJvdyAnSW52YWxpZCBmb3JtYXQgZm9yIGRlZmF1bHQgY2FwYWJpbGl0aWVzJztcbiAgfVxuICByZXR1cm4gY2Fwcztcbn1cblxuZnVuY3Rpb24gZ2V0UGFyc2VyICgpIHtcbiAgbGV0IHBhcnNlciA9IG5ldyBBcmd1bWVudFBhcnNlcih7XG4gICAgdmVyc2lvbjogcGtnT2JqLnZlcnNpb24sXG4gICAgYWRkSGVscDogdHJ1ZSxcbiAgICBkZXNjcmlwdGlvbjogJ0Egd2ViZHJpdmVyLWNvbXBhdGlibGUgc2VydmVyIGZvciB1c2Ugd2l0aCBuYXRpdmUgYW5kIGh5YnJpZCBpT1MgYW5kIEFuZHJvaWQgYXBwbGljYXRpb25zLicsXG4gICAgcHJvZzogcHJvY2Vzcy5hcmd2WzFdIHx8ICdBcHBpdW0nXG4gIH0pO1xuICBsZXQgYWxsQXJncyA9IF8udW5pb24oYXJncywgZGVwcmVjYXRlZEFyZ3MpO1xuICBwYXJzZXIucmF3QXJncyA9IGFsbEFyZ3M7XG4gIGZvciAobGV0IGFyZyBvZiBhbGxBcmdzKSB7XG4gICAgcGFyc2VyLmFkZEFyZ3VtZW50KGFyZ1swXSwgYXJnWzFdKTtcbiAgfVxuICB1cGRhdGVQYXJzZUFyZ3NGb3JEZWZhdWx0Q2FwYWJpbGl0aWVzKHBhcnNlcik7XG5cbiAgcmV0dXJuIHBhcnNlcjtcbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFyZ3MgKCkge1xuICBsZXQgZGVmYXVsdHMgPSB7fTtcbiAgZm9yIChsZXQgWywgYXJnXSBvZiBhcmdzKSB7XG4gICAgZGVmYXVsdHNbYXJnLmRlc3RdID0gYXJnLmRlZmF1bHRWYWx1ZTtcbiAgfVxuICByZXR1cm4gZGVmYXVsdHM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFBhcnNlcjtcbmV4cG9ydCB7IGdldERlZmF1bHRBcmdzLCBnZXRQYXJzZXIgfTtcbiJdLCJzb3VyY2VSb290IjoiLi4vLi4ifQ==
