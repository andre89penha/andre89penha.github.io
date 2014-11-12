function initialize () {
	var mapOptions = {
		center: new google.maps.LatLng(-34.397, 150.644),
		zoom: 10,
		mapTypeId: google.maps.MapTypeId.SATELLITE
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
}