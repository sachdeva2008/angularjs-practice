angular.
module("dashboard").
component('dashboard', {
    templateUrl: 'dashboard/dashboard.template.html',
    controller: ['$scope','$http', function($scope,$http){
     //$scope.popularList = dashboardService.getPopular();

        $http.get('https://api.themoviedb.org/3/movie/popular?api_key=89a3cec09aeacd718c18982467dc164a&language=en-US').then(function(response){
             console.log("[movie db resp]",response);
             $scope.popularList = response.data.results;
        });
    
        $http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=89a3cec09aeacd718c18982467dc164a&language=en-US').then(function(response){
             console.log("[movie upcoming resp]",response);
             $scope.upcomingList = response.data.results;
        });
    
        $http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=89a3cec09aeacd718c18982467dc164a&language=en-US').then(function(response){
             console.log("[movie now_playing resp]",response);
             $scope.nowPlayingList = response.data.results;
        });
    
       }]
  });