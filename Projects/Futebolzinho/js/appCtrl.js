app.controller('AppCtrl',function($scope){
	
	$scope.listPlayers = [];
	
	//Função para convocar um jogador.
	$scope.convene = function(){

		var player = $scope.player;

		if (!isNaN(player) || player.length > 3) {
			$scope.listPlayers.push(player);
		}
	}
});