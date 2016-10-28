angular.module('woofApp', ['ui.router','LocalStorageModule'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('woofParent', {
      url: '/',
      abstract: true,
      template: '<ui-view></ui-view>'
    }).state('woofParent.new', {
      url: 'new',
      templateUrl: 'src/templates/new.html',
      controller: 'NewWoofController as newCtlr'
    }).state('woofParent.list', {
      url: 'list',
      templateUrl: 'src/templates/list.html',
      controller: 'ListWoofsController as list'
    });
  });
