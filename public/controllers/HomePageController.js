app.controller('HomePageController', ['$scope', 'GeoLocService', function($scope, GeoLocService){

	$scope.Stores = [];

	console.log(navigator.geolocation);
	
	var urlObj = {
		location: "",
		page: 1,
		resultCount: 10,
		callback: "JSON_CALLBACK"
	}

	navigator.geolocation.getCurrentPosition(function(position){
		console.log(position);
		var url = "http://codingchallenge.datasphere.com:8084/getbusinesses/?location=" + position.coords.latitude + "," +  position.coords.longitude + "&pg=" + urlObj.page + "&pz=" + urlObj.resultCount + "&callback=" + urlObj.callback;
		GeoLocService.GetCurrentLocation(url, function(retval){
			$scope.Stores = retval.businesses;
		});
	});


}]);