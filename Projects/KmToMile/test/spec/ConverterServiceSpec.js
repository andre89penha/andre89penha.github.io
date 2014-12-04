describe('ConverterService', function(){

	var service;

	beforeEach(module('converter'));
	beforeEach(function(){
		inject(function(_ConverterService_) {
			service = _ConverterService_;
		});
	});

	it('should convert km to mile', function(){;
		expect(service.kmToMile(1)).toBe(0.62)
	});

	it('should return null for given string', function(){
		expect(service.kmToMile("1")).toBe(null);
		expect(service.kmToMile("string")).toBe(null);
		expect(service.kmToMile("")).toBe(null);
	});
	it('should return null for undefined', function(){
		expect(service.kmToMile(test)).toBe(null);
		expect(service.kmToMile()).toBe(null);
	});

	it('should return null for negative number', function(){
		expect(service.kmToMile(-1)).toBe(null);
	});

});