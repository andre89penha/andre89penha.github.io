describe('ConverterService',function(){
  it('should convert from KM to Mile', function(){
    expect(ConverterService.kmToMile(2)).toBe(1.242742384);
  });
  
  it('should return null if a non number was given', function(){
    expect(ConverterService.kmToMile('potato')).toBe(null);
  });
  
  it('should return null if a negative was given', function(){
    expect(ConverterService.kmToMile(-1)).toBe(null);
  });
});