describe('ConverterService', function() {
	var converterService;

	beforeEach(function(){
		//load module
		module('converterApp');

		inject(function(_converterService_) {
      		converterService = _converterService_;
    	});
	});

	it('should have a kmToMile method', function() {
		expect(angular.isFunction(converterService.kmToMile)).toBe(true);
	});

	it('should convert km to mile', function() {
		expect(converterService.kmToMile(1)).toBeCloseTo(0.62);
		expect(converterService.kmToMile(2)).toBeCloseTo(1.24);
	});

	it('should return null for a given string', function() {
		expect(converterService.kmToMile('')).toBe(null);
		expect(converterService.kmToMile('1')).toBe(null);
		expect(converterService.kmToMile('-1')).toBe(null);
		expect(converterService.kmToMile('anystring')).toBe(null);
	});

	it('should return null for given negative number', function() {
		expect(converterService.kmToMile(-1)).toBe(null);
	});
});