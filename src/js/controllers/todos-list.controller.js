angular.module('AngularToDos')



.controller('ListTodosCtlr', function($state, storageService, $scope, $stateParams) {
  this.listTodosArray = storageService.get();
  this.listFilter = $stateParams.filter || 'all';
  this.filtersObj = {
    all: {},
    complete: {complete: true},
    incomplete: {complete: false}
  };
  this.total = this.listTodosArray.length;
  this.incompleteTodosCount = getIncompleteCount(this.listTodosArray);

  function getIncompleteCount(array) {
    var complete = 0;
    for (var i = 0; i < array.length; i++){
      if(array[i].complete){
        complete ++;
      }
    }
    console.log('complete: ' + complete);
    return complete;
  }
  this.toggle = function(index, todoObj){
    storageService.toggle(index, todoObj);
    $state.reload();

  }
  this.delete = function(index, todoObj){
    storageService.delete(index, todoObj);
    $state.reload();
  }
  this.save = function(index, todoObj){
    storageService.save(index,todoObj);
    $state.reload();
  }
  this.listTodosArray = storageService.get();
  this.clear = function(){
    this.listTodosArray = storageService.clearCompleted();
    storageService.set(this.listTodosArray);
    $state.reload();
  }

});
