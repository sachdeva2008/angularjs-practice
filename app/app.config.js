angular.module("MovieListApp")
.config(['$routeProvider', 
  function($routeProvider){
    $routeProvider
      .when('/', {
        template: '<dashboard></dashboard>  ',
      })
      .when('/movie-detail/:id', {
        template: '<movie-detail></movie-detail>'
      })
      .when('/cast-detail/:id', {
        template: '<h1>This is {{ id }}</h1>'
      })
      .otherwise({
        redirectTo: '/'
      })
  }
]);