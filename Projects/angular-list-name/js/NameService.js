app.factory('NameService', function($window){
	var 
	names = [];
	nameService = {};

	var getIndex = function(){
		return $window.parseInt(Math.random() * names.length);
	}

	var persistNames = function(){
		$window.localStorage.setItem('names', JSON.stringify(names));
	}
	nameService.addName = function(name){
		names.push(name);
		persistNames();
	}
	nameService.getName = function(){
		var retriveNames = JSON.parse($window.localStorage.getItem('names'));
		if (retriveNames && retriveNames.length > 0) {
		 	names = retriveNames;
		 } 
		return names;
	}

	nameService.whoWillPay = function(){
		
		if (names.length > 0) {
			return names[getIndex()];;
		}else{
			return "Not exists names";
		}
	}

	nameService.removeName = function(name){
		var index = names.indexOf(name);
		if(index != -1){
			names.splice(index, 1);
			persistNames();
		}
	}
	return nameService;
});