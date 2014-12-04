var ConverterService = {

celsiusToFahrenheit: function(degree){
	if(!isNaN(degree)){
	var result = 1.8*degree + 32;
	
	return parseFloat(result);
	}
	return null;

}
}