angular.
module("movieDetail").
component('movieDetail', {
    templateUrl: 'movie-detail/movie-detail.template.html',
    controller: ['$scope','$http','$routeParams', function($scope,$http,$routeParams){
        $http.get('https://api.themoviedb.org/3/movie/'+$routeParams.id+'?api_key=89a3cec09aeacd718c18982467dc164a&language=en-US').then(function(response){
             console.log("[movie db resp]",response.data);
             $scope.movieDetail = response.data;
        });    
       }]
  });