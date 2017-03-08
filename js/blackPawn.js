function blackPawn(xCoord,yCoord,board){

	this.b = board;
	this.x = xCoord;
	this.y = yCoord;

	this.name = "pawn";

	this.score = 1;

	this.width = tileSize/2;
	this.height = tileSize/1.4;

	this.moveSet = [];

	this.color = "black";

	this.selected = false;

	this.img = document.getElementById("black-pawn");


	this.draw = function(){

		contextGA.drawImage(this.img,200+(this.x*tileSize + (tileSize-this.width)/2), this.y*tileSize + (tileSize-this.height)/2,this.width,this.height);
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

		if(this.b.tileExists(this.x-1,this.y+1)){
			if(this.b.tileContainsPiece(this.x-1,this.y+1) != null){
				if(this.b.tileContainsPiece(this.x-1,this.y+1).color != this.color){
					this.addToMoveSet(this.x-1,this.y+1);	
				}
			}
		}

		if(this.b.tileExists(this.x,this.y+1)){
			if(this.b.tileContainsPiece(this.x,this.y+1) == null){
				this.addToMoveSet(this.x,this.y+1);
			}
		}

		if(this.b.tileExists(this.x+1,this.y+1)){
			if(this.b.tileContainsPiece(this.x+1,this.y+1) != null){
				if(this.b.tileContainsPiece(this.x+1,this.y+1).color != this.color){
					this.addToMoveSet(this.x+1,this.y+1);	
				}
			}
		}

		if(this.y == 1){
			if(this.b.tileContainsPiece(this.x,this.y+2) == null && this.b.tileContainsPiece(this.x,this.y+1) == null){
				this.addToMoveSet(this.x,this.y+2);
			}
		}

		
	}
}