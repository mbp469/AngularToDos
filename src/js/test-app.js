console.clear();

angular.module('testApp', []).controller('TestController', TestController);

function TestController(logger) {
  this.logMessage = function(message) {
    logger.log(message);
  }
}
