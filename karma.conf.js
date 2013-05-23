// Karma configuration
// Generated on Tue May 21 2013 22:03:45 GMT-0400 (EDT)


// base path, that will be used to resolve files and exclude
basePath = '';


// list of files / patterns to load in the browser
files = [
  MOCHA,
  MOCHA_ADAPTER,
  // jQuery used in tests only:
  'http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js',
  'http://ajax.googleapis.com/ajax/libs/angularjs/1.0.6/angular.min.js',
  'test/angular-mocks.js', // note this is v1.1.4 - needed to support Mocha
  'js/slidebox.js',
  'test/chai.js',
  'test/slidebox-test.js'
];


// list of files to exclude
exclude = [
  
];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
//browsers = ['Chrome', 'Firefox', 'Safari'];
browsers = ['Chrome'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
