

function board(){

	this.files = [];
	this.x = 0;
	this.whitePieces = [];
	this.blackPieces = [];
	


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

	
	this.whitePieces.push(new bishop(2,7,"white",this));
	this.whitePieces.push(new bishop(5,7,"white",this));
	this.whitePieces.push(new rook(7,7,"white",this));
	this.whitePieces.push(new rook(0,7,"white",this));
	this.whitePieces.push(new queen(3,7,"white",this));
	this.whitePieces.push(new knight(1,7,"white",this));
	this.whitePieces.push(new knight(6,7,"white",this));



	for(var i = 0; i < 8; i++){
		this.whitePieces.push(new whitePawn(i,6,this));
		this.whitePieces.push(new blackPawn(i,1,this));
	}
	
	
	this.tileContainsPiece = function(xCoord,yCoord){

		for(var i = 0; i<this.whitePieces.length; i++){
			var piece = this.whitePieces[i];

			if(piece.x == xCoord && piece.y == yCoord){
				return this.whitePieces[i];
			}
		}

		return null;
	}

	this.unhighlightTiles = function(){
		for(var i = 0; i<this.files.length; i++){
			for(var j = 0; j<this.files[i].length; j++){
				this.files[i][j].highlighted = false;
			}
		}
	}

	this.getSelectedPiece = function(){
		for(var i = 0; i < this.whitePieces.length; i++){
			if(this.whitePieces[i].selected){
				return this.whitePieces[i];
			}
		}

		return null;
	}




	this.selectTile = function(xCoord,yCoord){
		this.unhighlightTiles();

		if(this.getSelectedPiece() != null){
			if(this.getSelectedPiece().isInMoveSet(xCoord,yCoord)){
				this.getSelectedPiece().moveTo(xCoord,yCoord);
				this.refreshMoveSets();
			}else{
				if(this.tileContainsPiece(xCoord,yCoord) != null){
					this.tileContainsPiece(xCoord,yCoord).selected = true;
					var array = this.tileContainsPiece(xCoord,yCoord).moveSet;
				
					for(var i = 0; i<array.length; i++){
						array[i].highlighted = true;
					}

				}
			}

			this.getSelectedPiece().selected = false;
		}else{

			

			if(this.tileContainsPiece(xCoord,yCoord) != null){
				this.tileContainsPiece(xCoord,yCoord).selected = true;
				var array = this.tileContainsPiece(xCoord,yCoord).moveSet;
			
				for(var i = 0; i<array.length; i++){
					array[i].highlighted = true;
				}

			}
		}

		this.draw();
	}


	this.tileExists = function(xCoord,yCoord){
		if(xCoord > 7 || xCoord < 0 || yCoord > 7 || yCoord < 0 ){
			return false;
		}

		return true;
	}





	this.draw = function(){
		for(var i = 0; i<this.files.length; i++){
			for(var j = 0; j<this.files[i].length; j++){

				if(this.files[i][j].highlighted){
					this.files[i][j].drawHighlight();
				}else{
					this.files[i][j].draw();
				}


				if(this.tileContainsPiece(j,i) != null){
					this.tileContainsPiece(j,i).draw();
				}
			}
		}
	}



	this.refreshMoveSets = function(){

		for(var i = 0; i<this.whitePieces.length; i++){
			this.whitePieces[i].refreshMoveSet();
		}

	}

	this.refreshMoveSets();
	
	




}


