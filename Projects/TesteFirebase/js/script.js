var firebaseRef = new Firebase("https://dazzling-fire-3862.firebaseio.com/");

$('document').ready(function(){
	firebaseRef.set({
	userone : {
		name : Andre,
		job : programmer
	},

	usertwo : {
		name: Maira,
		job: housewife
	}
});
});