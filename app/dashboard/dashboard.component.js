angular.
module("dashboard").
component('dashboard', {
    templateUrl: 'dashboard/dashboard.template.html',
    controller: 'dashboardController'
  }).
controller('dashboardController',['$scope','$http', function ($scope,$http){
     //$scope.popularList = dashboardService.getPopular();
        var popularMovieUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=89a3cec09aeacd718c18982467dc164a&language=en-US';
        var upcomingMovieUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=89a3cec09aeacd718c18982467dc164a&language=en-US';
        var npwPlayingMovieUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=89a3cec09aeacd718c18982467dc164a&language=en-US';

        $scope.getApiResponse = function(){
               $http.get(popularMovieUrl).
               then(function(response){
                    console.log("[movie db resp]",response.data);
                    $scope.popularList = response.data.results;
                    $scope.testing = response.data;
                    $http.get(upcomingMovieUrl).
                    then(function(response){
                         console.log("[movie upcoming resp]",response);
                         $scope.upcomingList = response.data.results;
                         $http.get(npwPlayingMovieUrl).then(function(response){
                              console.log("[movie now_playing resp]",response);
                              $scope.nowPlayingList = response.data.results;
                         });
                    });
          });
        }

        $scope.getApiResponse();
    
     }]);