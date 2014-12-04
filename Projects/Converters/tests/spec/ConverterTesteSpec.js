describe('ConverterService',function(){
  it('should convert from KM to MILE',function(){
    expect(ConverterService.kmToMile(1)).toBe(0.621371192);
  });
  
  it('should return null is a non number was given', function(){
    expect(ConverterService.kmToMile('potato')).toBe(null);
  });
  
  it('should return null is a negative number was given', function(){
    expect(ConverterService.kmToMile(-1)).toBe(null);
  });
  
  it('should return null is a string number was given', function(){
    expect(ConverterService.kmToMile('1')).toBe(null);
  });


});