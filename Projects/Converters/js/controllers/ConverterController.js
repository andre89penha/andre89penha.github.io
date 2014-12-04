button = document.getElementById('btTransfer');
input = document.querySelector("input");
section = document.getElementById('main');

button.onclick = function(){
	
	if (input.getAttribute('id') == "km") {
		input.setAttribute('id','mile');
		section.querySelector("label").innerHTML = "Mile";
		section.querySelector("p").innerHTML = "Km";
		section.querySelector("span").setAttribute('id','mile');
		
	} else if (input.getAttribute('id') == "mile") {
		input.setAttribute('id','km');
		section.querySelector("label").innerHTML = "Km";
		section.querySelector("p").innerHTML = "Mile";
		section.querySelector("span").setAttribute('id','km');
	}
}
input.onkeyup = function(){
var distance = parseFloat(input.value)
var result = 0;

if (input.getAttribute('id') == 'km') {
	result = ConverterService.kmToMile(distance);
} else {
	result = ConverterService.mileToKm(distance);
}


if (result){
	section.querySelector("span").innerHTML = result.toFixed(2);
}
else{
	section.querySelector("span").innerHTML = 0;
}
};