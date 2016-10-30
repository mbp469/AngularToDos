angular.module('AngularToDos').service('storageService', function(localStorageService) {

    function setAllTodos(allTodos) {
        localStorageService.set('localStorageTodos', allTodos);
    }

    function getAllTodos() {
        return localStorageService.get('localStorageTodos') || [];
    }

    function findTodoById(todosArray, id) {
      var todoToReturn;
      todosArray.forEach(function(item) {
        if (item.id === id) {
          todoToReturn = item;
        }
      });
      return todoToReturn;
    }

    function toggleComplete(index, todoObj) {
      todoObj.complete = !todoObj.complete;
      var allTodosArray = getAllTodos();
      allTodosArray.splice(allTodosArray.length - index - 1, 1, todoObj);
      setAllTodos(allTodosArray);
    }

    function deleteTodo(index, todoObj){
      var allTodosArray = getAllTodos();

      // todoToDelete.deleted = true;
      allTodosArray.splice(allTodosArray.length - index - 1, 1);
      setAllTodos(allTodosArray);

    }

    function saveTodos(index, todoObj) {
      var allTodosArray = getAllTodos();
      allTodosArray.splice(allTodosArray.length - 1, 1, todoObj);
      console.log('in service saveTodos');
      setAllTodos(allTodosArray);
    }

    function clearCompleted(){
      var allTodosArray = getAllTodos();
      var array = [];
      for(var i = 0; i < allTodosArray.length; i++){
        if(!allTodosArray[i].complete) {
          array.push(allTodosArray[i]);
        }
      }
      console.log(array);
      return array;
    }

    return {
      get: getAllTodos,
      set: setAllTodos,
      toggle: toggleComplete,
      delete: deleteTodo,
      save: saveTodos,
      clearCompleted: clearCompleted
    }

});
