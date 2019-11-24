angular.
module("movieDetail").
component('movieDetail', {
    templateUrl: 'movie-detail/movie-detail.template.html',
    controller: 'movieDetailController',
}).
controller('movieDetailController',['$scope','$http','$routeParams', function ($scope,$http,$routeParams){
     var movieDetailUrl = 'https://api.themoviedb.org/3/movie/'+$routeParams.id+'?api_key=89a3cec09aeacd718c18982467dc164a&language=en-US';
     $scope.id = $routeParams.id;
     $scope.getApiResponse = function(){
          $http.get(movieDetailUrl).then(function(response){
               console.log("[movie db resp]",response.data);
               $scope.movieDetail = response.data;
          });
     }
     $scope.getApiResponse();    
     }]);
  