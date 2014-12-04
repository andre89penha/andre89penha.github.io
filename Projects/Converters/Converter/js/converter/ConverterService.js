app.factory('converterService', function(){
	var converterService = {};

	converterService.kmToMile = function(km){
		if (typeof km === 'string') return null;
		if (km < 0) return null;

		return km * 0.62;
		
	}

	return converterService;
});