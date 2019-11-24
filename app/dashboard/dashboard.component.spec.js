// describe('Api hit for movie list', () => {
//     beforeEach(() => {
//       angular.mock.module('dashboard');
//     });
//     var $controller, $rootScope;

//     beforeEach(inject(function(_$controller_, _$rootScope_,_$httpBackend_){
//       // The injector unwraps the underscores (_) from around the parameter names when matching
//       $controller = _$controller_;
//       $rootScope = _$rootScope_;
//       $httpBackend = _$httpBackend_;
//       $httpBackend.expectGET('https://api.themoviedb.org/3/movie/popular?api_key=89a3cec09aeacd718c18982467dc164a&language=en-US').respond(200,{data:'expected response'});
//     }));
  
//     describe('popular movie list count', function() {
//       it('popular movie list count should be 20', function() {
//         var $scope = $rootScope.$new();
//         var controller = $controller('dashboardController', { $scope: $scope });
//         $scope.getApiResponse();
//         //$httpBackend.flush();
//         expect($scope.getApiResponse()).toEqual('expected response');
//       });
//     });
//   });