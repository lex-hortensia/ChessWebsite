

function board(){

	this.files = [];
	this.x = 0;
	this.whitePieces = [];
	


	for(var i = 0; i<8; i++){
		this.files[i] = [];
	}

	for(var i = 0; i<8; i++){
		for(var j = 0; j<8;j++){

			if((j+this.x)%2 == 0){
				this.files[i][j] = new tile(j*tileSize,i*tileSize,true);
			}else{
				this.files[i][j] = new tile(j*tileSize,i*tileSize,false);
			}
			
		}
		this.x++;
	}


	this.whitePieces[0] = new bishop(3,3);

	this.tileContainsPiece = function(xCoord,yCoord){

		for(var i = 0; i<this.whitePieces.length; i++){
			var piece = this.whitePieces[i];

			if(piece.x == xCoord && piece.y == yCoord){
				return this.whitePieces[i];
			}
		}

		return null;
	}






	this.draw = function(){
		for(var i = 0; i<this.files.length; i++){
			for(var j = 0; j<this.files[i].length; j++){
				this.files[i][j].draw();


				if(this.tileContainsPiece(i,j) != null){
					this.tileContainsPiece(i,j).draw();
				}
			}
		}
	}






}


