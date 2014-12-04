var inputNumber = document.getElementById('temperature');

inputNumber.onkeyup = function(){
	var textResult = document.getElementById('result');
	var degree = parseFloat(inputNumber.value);
	var degreeConverter = ConverterService.celsiusToFahrenheit(degree);

	if (degreeConverter) {
		textResult.innerHTML = degreeConverter + " F";
	} else {
		textResult.innerHTML = "";
	}
};