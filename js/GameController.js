angular.module('TicTacToeApp').controller("GameController", GameControllerFunc);

GameControllerFunc.$inject=['$firebase'];




function GameControllerFunc($firebase) {

	this.tiles = ["","","","","","","","",""];

	this.fullbox = function(object){

		var data= object .srcElement.attributes.data.value;

		var getBox= document.getElementById(data);

		getBox.style.backgroundColor= currentPlayer.color;

		this.switchPlayer= switchPlayer()


	};




	function switchPlayer(){

		var ref = new Firebase("https://tictactoeappash.firebaseio.com/");
		var TicTacToe = $firebase(ref).$asObject

		var player_1 = new Player_1();
		var player_2= new Player_2();
		var currentPlayer= player_1;

		if (currentPlayer === player_1 ){
			currentPlayer = player_2
		}

		return player_1

		else
		{currentPlayer= player_1

		}

		return player_2


	}



}




