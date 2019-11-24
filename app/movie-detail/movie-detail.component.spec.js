// describe('Api hit for movie detail', () => {
//     beforeEach(() => {
//       angular.mock.module('movieDetail');
//     });
//     var $controller, $rootScope;

//     beforeEach(inject(function( _$rootScope_,_$httpBackend_,$routeParams,_$controller_){
//       // The injector unwraps the underscores (_) from around the parameter names when matching
//       $controller = _$controller_;
//       $rootScope = _$rootScope_;
//       $httpBackend = _$httpBackend_;
//       $httpBackend.expectGET('https://api.themoviedb.org/3/movie/'+$routeParams.id+'?api_key=89a3cec09aeacd718c18982467dc164a&language=en-US').respond(200,{data:'expected response'});
//     }));
  
//     describe('movie detail', function() {
//       it('movie detail should return status 200', function() {
//         var $scope = $rootScope.$new();
//         var controller = $controller('movieDetailController', { $scope: $scope,$routeParams: {id: '...'}});
//         $scope.getApiResponse();
//         $httpBackend.flush();
//         expect(2).toEqual($scope.id);
//       });
//     });
//   });