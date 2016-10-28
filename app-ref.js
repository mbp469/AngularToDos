var woof = angular.module('woof', ['ui.router', 'LocalStorageModule']);

woof.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/index-ref.html');

  $stateProvider.state('woof', {
    url: '/index-ref.html',
    abstract: true,
    template: '<ui-view></ui-view>'
  }).state('woof.new', {
    url: 'new',
    templateUrl: './src/templates/new.html',
    controller: 'newWoofCtrl'
  }).state('woof.index', {
    url: '?filter',
    templateUrl: './src/templates/list.html',
    controller: 'woofsCtrl'
  });
});
