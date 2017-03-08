
function moveList(){
	this.x = 640;
	this.y = 0;
	this.width = 200;
	this.height = 640;	
	this.listOfMoves = [];

	this.addToMoveList = function(text){
		this.listOfMoves.push(text);
	}

	this.draw = function() {


		
		contextGA.fillStyle="#FFFFFF";
		contextGA.strokeStyle="#000000";
		contextGA.font = "20px Times New Roman";
		contextGA.fillRect(this.x,this.y,this.width,this.height);
		contextGA.strokeRect(this.x,this.y,this.width,this.height);
		contextGA.fillStyle="#AAADAD";
		contextGA.fillRect(this.x,this.y+35,this.width,3);
		contextGA.fillStyle="#000000";
		contextGA.fillRect(this.x,this.y,10,this.height);

		contextGA.fillText("Move List", this.x+60,this.y+25);



		contextGA.font = "15px Times New Roman";

		for(var i = 0; i < this.listOfMoves.length; i++){
			contextGA.fillText( i+1 +". "+this.listOfMoves[i],this.x+15,60+(i*20));
		}

		console.log(this.listOfMoves);
		
		
	}
}