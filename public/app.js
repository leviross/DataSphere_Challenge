var app = angular.module('DsApp', ['ngRoute', 'ngResource']);


app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeProvider.when('/', {
        templateUrl: 'views/homepage.html',
        controller: 'HomePageController'
    }).otherwise({
      redirectTo: '/'
  });

}]);    
   
app.run(function ($rootScope, $http, $location) {//Used for 
    console.log('app.run'); //used for more config, not needed now...

});

app.controller('MasterController', ['$rootScope', '$location', '$scope', function ($rootScope, $location, $scope) {
//top level controller

}]);








