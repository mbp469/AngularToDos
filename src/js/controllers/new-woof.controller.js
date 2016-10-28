angular.module('woofApp').controller('NewWoofController', function($state, localStorageService) {
  this.maxTextLength = 120;
  this.allWoofsArray = [];

  this.storeAllWoofs = function() {
    localStorageService.set('localStorageWoofs', this.allWoofsArray);
  };

  this.getAllWoofs = function() {
    return localStorageService.get('localStorageWoofs') || [];
  };

  this.create = function(woofMessage) {

    this.allWoofsArray = this.getAllWoofs();
    // Assign the localStorageWoofs value to this array
    // If local storage is empty, assign an empty array

    this.allWoofsArray.push({
      body: woofMessage
    }); // [ {body: test one } ]
    this.storeAllWoofs();

    $state.go('woofParent.list');
  };
});
