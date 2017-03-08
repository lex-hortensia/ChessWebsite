function bishop(xCoord,yCoord, pieceColor, board){

	this.b = board;
	this.x = xCoord;
	this.y = yCoord;

	this.score = 3;

	this.name = "bishop";

	this.width = tileSize/1.25;
	this.height = tileSize/1.25;

	this.moveSet = [];

	this.color = pieceColor;

	this.selected = false;

	this.img;

	this.color == "white" ? this.img = document.getElementById("white-bishop") : this.img = document.getElementById("black-bishop"); 


	/*

	var img=document.getElementById("scream");
    ctx.drawImage(img,10,10);
	*/

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

		for(var i = 1; i < 8; i++){

			if(this.b.tileExists(this.x+i,this.y+i)){
				if(this.b.tileContainsPiece(this.x+i,this.y+i) != null){
					if(this.b.tileContainsPiece(this.x+i,this.y+i).color != this.color){
						this.addToMoveSet(this.x+i,this.y+i);
					}
						break;
				}else{
					this.addToMoveSet(this.x+i,this.y+i);
				}
				
			}else{
				break;
			}
		}

		for(var i = 1; i < 8; i++){

			if(this.b.tileExists(this.x+i,this.y-i)){
				if(this.b.tileContainsPiece(this.x+i,this.y-i) != null){
					if(this.b.tileContainsPiece(this.x+i,this.y-i).color != this.color){
						this.addToMoveSet(this.x+i,this.y-i);
					}
						break;
				}else{
					this.addToMoveSet(this.x+i,this.y-i);
				}
				
			}else{
				break;
			}
		}

		for(var i = 1; i < 8; i++){

			if(this.b.tileExists(this.x-i,this.y+i)){
				if(this.b.tileContainsPiece(this.x-i,this.y+i) != null){
					if(this.b.tileContainsPiece(this.x-i,this.y+i).color != this.color){
						this.addToMoveSet(this.x-i,this.y+i);
					}
						break;
				}else{
					this.addToMoveSet(this.x-i,this.y+i);
				}
				
			}else{
				break;
			}
		}

		for(var i = 1; i < 8; i++){

			if(this.b.tileExists(this.x-i,this.y-i)){
				if(this.b.tileContainsPiece(this.x-i,this.y-i) != null){
					if(this.b.tileContainsPiece(this.x-i,this.y-i).color != this.color){
						this.addToMoveSet(this.x-i,this.y-i);
					}
						break;
				}else{
					this.addToMoveSet(this.x-i,this.y-i);
				}
				
			}else{
				break;
			}
		}
	}
}