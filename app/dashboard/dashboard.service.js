angular.
  module('dashboard')
  .factory('dashboardService', function($http){
    var factory = {};

    factory.getPopular = function () {
         $http.get('https://api.themoviedb.org/3/movie/popular?api_key=89a3cec09aeacd718c18982467dc164a&language=en-US').then(function(response){
             return response.data.results;
        });
    }

    factory.getUpcoming = function (){
        $http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=89a3cec09aeacd718c18982467dc164a&language=en-US').then(function(response){
            console.log("[movie upcoming resp]",response);
            return response.data.results;
        });
    }

    factory.getNowPlaying = function () {
        $http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=89a3cec09aeacd718c18982467dc164a&language=en-US').then(function(response){
                return response.data.results;
        });
    }

    return factory;
  });