angular.module('AngularToDos').controller('NewTodoCtlr', function($state, storageService) {
  this.allTodosArray = [];

  this.create = function(todoText) {
    this.allTodosArray = storageService.get();
    this.allTodosArray.push({
      id: new Date(),
      body: todoText,
      complete: false,
      // deleted: false
    });
    storageService.set(this.allTodosArray);
    $state.go('todoParent.list');
  };
});
