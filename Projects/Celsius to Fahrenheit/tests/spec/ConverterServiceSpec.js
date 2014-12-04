describe('ConverterService',function(){
  
  it('should convert Celsius To Fahrenheit', function(){
    expect(ConverterService.celsiusToFahrenheit(22)).toBe(71.6);
  });

  it('should convert negative Celsius To Fahrenheit', function(){
    expect(ConverterService.celsiusToFahrenheit(-12)).toBeCloseTo(10.4, 0);
  });
  
  it('should return null if a non number was given', function(){
    expect(ConverterService.celsiusToFahrenheit('non number')).toBe(null);
  });

});