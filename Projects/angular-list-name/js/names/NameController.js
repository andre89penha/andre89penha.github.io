app.controller('NameController', function($scope, $window, NameService){

	$scope.names= NameService.getName();
	
	$scope.addName = function(){
		if($scope.name.length > 2){
			NameService.addName($scope.name);
			$scope.name="";
		} else {
			$scope.name="";
		}
		
	};
	$scope.whoWillPay = function(){
		var name = NameService.whoWillPay();
		$window.alert(name);
	};

	$scope.removeName = function(name){
		if($window.confirm('Remove' + name + 'from list?')){
			NameService.removeName(name);
		}
	}

});