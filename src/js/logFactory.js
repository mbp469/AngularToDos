angular.module('testApp').factory('logger', LoggerFunction);

function LoggerFunction() {
  function logMessage(message) {
      console.log(message);
  };

  return {
    log: logMessage
  };
}
