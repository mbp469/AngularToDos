angular.module('woofApp').controller('ListWoofsController', function(localStorageService) {
  this.getAllWoofs = function() {
    return localStorageService.get('localStorageWoofs') || [];
  };

  this.listWoofsArray = this.getAllWoofs();
});
