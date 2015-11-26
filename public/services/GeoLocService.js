app.factory('GeoLocService', ['$http', function($http){

	return {

		GetCurrentLocation: function(url, cb){

			return $http.jsonp(url)
				.success(function(data){
					console.log(data);
					cb(data);
				})
				.error(function(err){
					console.log(err);
				});
		} 
	}


}]);