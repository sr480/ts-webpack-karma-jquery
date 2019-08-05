const webpackConfig = require("./webpack.config");
const path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine-jquery', 'jasmine'],
    files: ['src/**/*.spec.ts'],
    preprocessors: {
      '**/*.ts': ['webpack']
    },
    plugins: [
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-jquery'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'text-summary', 'lcovonly' ],
      dir: path.join(__dirname, 'coverage'),
      fixWebpackSourcePaths: true,
      'report-config': {
        html: { outdir: 'html' }
      }
    },
    webpack: webpackConfig,
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
