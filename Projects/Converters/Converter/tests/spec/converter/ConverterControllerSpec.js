describe('ConverterController', function() {
	var 
		$scope,
		controller,
		converterService;

	beforeEach(function(){
		//load module
		module('converterApp');

		inject(function($rootScope, $controller, _converterService_) {
    		$scope = $rootScope.$new();
    		converterService = _converterService_;
    		controller = $controller('ConverterController', {
      			$scope: $scope,
      			converterService: converterService
    		});
    	});
	});

	it('should to have km and mile to defined in scope', function(){
		expect($scope.km).toBeDefined();
		expect($scope.mile).toBeDefined(); 
	});

	it('should to have a method to convert km to mile', function(){
		expect($scope.kmToMile).toBeDefined();
	});

	it('should convert km to mile', function(){
		//given
		$scope.km = 2;

		//and
		spyOn(converterService, 'kmToMile').andCallThrough();

		//when
		$scope.kmToMile();

		//then
		expect(converterService.kmToMile).toHaveBeenCalledWith(2);

		//and
		expect($scope.mile).toBeCloseTo(1.24);
	});

	describe('should return 0 mile for', function() {
		it('given negative number', function(){
			//given
			$scope.km = -1;

			//when
			$scope.kmToMile();

			//and
			expect($scope.mile).toBe(0);
		});

		it('given empty km', function(){
			//given
			$scope.km = "";

			//when
			$scope.kmToMile();

			//and
			expect($scope.mile).toBe(0);
		});

		it('given 0 km', function(){
			//given
			$scope.km = 0;

			//when
			$scope.kmToMile();

			//and
			expect($scope.mile).toBe(0);
		});	
	});
});