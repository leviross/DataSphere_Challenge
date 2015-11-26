app.controller('HomePageController', ['$scope', 'GeoLocService', function($scope, GeoLocService){

	$scope.Stores = [];

	console.log(navigator.geolocation);
	//http:// codingchallenge.datasphere.com:8084/getbusinesses/?location={location}&pg={page}&pz={resultcount}&callback={js-callback}
	//http://codingchallenge.datasphere.com:8084/getbusinesses/?location=47.5458,- 122.31361&pg=1&pz=12&callback=mycallback
	
	var urlObj = {
		location: "",
		page: 1,
		resultCount: 10,
		callback: "JSON_CALLBACK"
	}
	var imageSources = ['http://content.secondspace.com/frontend-test/tile1-main.jpg', 'http://content.secondspace.com/frontend-test/tile1-logo.jpg', 'http://content.secondspace.com/frontend-test/tile2-main.jpg', 'http://content.secondspace.com/frontend-test/tile2-logo.jpg', 'http://content.secondspace.com/frontend-test/tile3-main.jpg', 'http://content.secondspace.com/frontend-test/tile3-logo.jpg'];
	

	navigator.geolocation.getCurrentPosition(function(position){
		console.log(position);
		var url = "http://codingchallenge.datasphere.com:8084/getbusinesses/?location=" + position.coords.latitude + "," +  position.coords.longitude + "&pg=" + urlObj.page + "&pz=" + urlObj.resultCount + "&callback=" + urlObj.callback;
		GeoLocService.GetCurrentLocation(url, function(retval){
			$scope.Stores = retval.businesses;
		})
	});


}]);