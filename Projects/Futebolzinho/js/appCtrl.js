app.controller('AppCtrl',function($scope){
	
	$scope.listPlayers = [];
	
	//Função para convocar um jogador.
	$scope.convene = function(){

		var player = $scope.player;

		if (!isNaN(player.name) || player.name.length > 3) {
			$scope.listPlayers.push(player);
			console.log('test');
		}
	}
});