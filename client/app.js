var app = angular.module('myApp', ['ngRoute'])

app.config(function($routeProvider){
  $routeProvider

  .when('/index', {
    templateUrl: 'partials/index.html'
  })

  .when('/new', {
    templateUrl: 'partials/new.html'
  })

  .when('/show/:id', {
    templateUrl: 'partials/show.html'
  })

  .when('/edit/:id', {
    templateUrl: 'partials/edit.html'
  })

  .otherwise({
    redirectTo: '/index'
  })
})
