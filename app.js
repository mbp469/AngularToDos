angular.module('AngularToDos', ['ui.router','LocalStorageModule'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('todoParent', {
      url: '/',
      abstract: true,
      template: '<ui-view></ui-view>'
    }).state('todoParent.new', {
      url: 'new',
      templateUrl: 'src/templates/new.html',
      controller: 'NewTodoCtlr as newCtlr'
    }).state('todoParent.list', {
      url: 'list?filter',
      templateUrl: 'src/templates/list.html',
      controller: 'ListTodosCtlr as list'
    });
  });
