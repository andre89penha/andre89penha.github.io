app.controller('ConverterController',function($scope, converterService){
	$scope.km = '';
	$scope.mile = '';

	$scope.kmToMile = function(){
		var mile = converterService.kmToMile($scope.km);
		if (mile == null){ 
			$scope.mile = 0;
		} else {
			$scope.mile = mile;
		}
	}
});