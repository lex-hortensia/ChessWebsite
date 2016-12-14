
function king(xCoord,yCoord, board){

	this.b = board;
	this.x = xCoord;
	this.y = yCoord;

	this.name = "King";

	this.width = tileSize/2;
	this.height = tileSize/2;

	this.moveSet = [];

	this.color = "white";

	this.selected = false;


	this.draw = function(){
		contextGA.fillStyle="#FFFFFF";
		contextGA.strokeRect(this.x*tileSize+ tileSize/4,this.y*tileSize + tileSize/4,this.width,this.height);
		contextGA.fillStyle=this.color;
		contextGA.fillRect(this.x*tileSize+ tileSize/4,this.y*tileSize+ tileSize/4,this.width,this.height);
	}

	this.addToMoveSet = function(xCoord,yCoord){

		this.moveSet.push(this.b.files[yCoord][xCoord]);
		
		
	}

	this.isInMoveSet = function(xCoord,yCoord){

		for(var i = 0; i < this.moveSet.length; i++){
			if(this.moveSet[i] == this.b.files[yCoord][xCoord]){
				return true;
			}
		}

		return false;

	}

	this.moveTo = function(xCoord,yCoord){
		this.x = xCoord;
		this.y = yCoord;
	}



	this.refreshMoveSet = function(){

		this.moveSet = [];

		

	}
}