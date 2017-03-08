// Javascript File 02


function board(){


	
	this.files = [];
	this.x = 0;
	this.whitePieces = [];
	this.blackPieces = [];
	this.turn = true; // true = white, false = black
	this.color = "white";
	


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
	
	this.whitePieces.push(new king(4,7,"white",this));
	this.blackPieces.push(new king(4,0,"black",this));


	if(document.getElementById("ran-btn").checked){
	
		for(var i = 0; i < 16; i++){
			var newpiece = Math.floor(Math.random()*5);
			 

			var x = i;
			var y = 7;
			if(i>7){
				y = 6;
				x = i-8;
			}

			if(x == 4 && y == 7){
				x = 90000;
			}

			if(newpiece == 0){
				this.whitePieces.push(new whitePawn(x,y,this));
			}else if(newpiece == 1){
				this.whitePieces.push(new knight(x,y,"white",this));
			}else if(newpiece == 2){
				this.whitePieces.push(new bishop(x,y,"white",this));
			}else if(newpiece == 3){
				this.whitePieces.push(new queen(x,y,"white",this));
			}else if(newpiece == 4){
				this.whitePieces.push(new rook(x,y,"white",this));
			}
		
		}

		for(var i = 0; i < 16; i++){
			var newpiece = Math.floor(Math.random()*5);
			 

			var x = i;
			var y = 0;
			if(i>7){
				y = 1;
				x = i-8;
			}

			if(x == 4 && y == 0){
				x = 90000;
			}

			if(newpiece == 0){
				this.blackPieces.push(new blackPawn(x,y,this));
			}else if(newpiece == 1){
				this.blackPieces.push(new knight(x,y,"black",this));
			}else if(newpiece == 2){
				this.blackPieces.push(new bishop(x,y,"black",this));
			}else if(newpiece == 3){
				this.blackPieces.push(new queen(x,y,"black",this));
			}else if(newpiece == 4){
				this.blackPieces.push(new rook(x,y,"black",this));
			}
		
		}
	}else{
		this.whitePieces.push(new bishop(2,7,"white",this));
		this.whitePieces.push(new bishop(5,7,"white",this));
		this.whitePieces.push(new rook(7,7,"white",this));
		this.whitePieces.push(new rook(0,7,"white",this));
		this.whitePieces.push(new queen(3,7,"white",this));
		this.whitePieces.push(new knight(1,7,"white",this));
		this.whitePieces.push(new knight(6,7,"white",this));
		this.whitePieces.push(new king(4,7,"white",this));


		this.blackPieces.push(new rook(0,0,"black",this));
		this.blackPieces.push(new knight(1,0,"black",this));
		this.blackPieces.push(new bishop(2,0,"black",this));
		this.blackPieces.push(new queen(3,0,"black",this));
		this.blackPieces.push(new king(4,0,"black",this));
		this.blackPieces.push(new bishop(5,0,"black",this));
		this.blackPieces.push(new knight(6,0,"black",this));
		this.blackPieces.push(new rook(7,0,"black",this));



		for(var i = 0; i < 8; i++){
			this.whitePieces.push(new whitePawn(i,6,this));
			this.blackPieces.push(new blackPawn(i,1,this));
		}
	}
	
	
	this.tileContainsPiece = function(xCoord,yCoord){

		for(var i = 0; i<this.whitePieces.length; i++){
			var piece = this.whitePieces[i];

			if(piece.x == xCoord && piece.y == yCoord){
				return this.whitePieces[i];
			}
		}

		for(var i = 0; i<this.blackPieces.length; i++){
			var piece = this.blackPieces[i];

			if(piece.x == xCoord && piece.y == yCoord){
				return this.blackPieces[i];
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
		for(var i = 0; i < this.blackPieces.length; i++){
			if(this.blackPieces[i].selected){
				return this.blackPieces[i];
			}
		}

		return null;
	}




	this.selectTile = function(xCoord,yCoord){
		if(this.turn == true)
			this.color = "white";
		else if(this.turn == false)
			this.color = "black";

		

		this.unhighlightTiles();

		if(this.getSelectedPiece() != null){
			if(this.getSelectedPiece().isInMoveSet(xCoord,yCoord)){

				if(this.tileContainsPiece(xCoord,yCoord) != null){
					if(this.tileContainsPiece(xCoord,yCoord) != this.getSelectedPiece()){

						console.log("The " + this.getSelectedPiece().color +" "+  this.getSelectedPiece().name + " takes the " + this.tileContainsPiece(xCoord,yCoord).color +" "+ this.tileContainsPiece(xCoord,yCoord).name );
						
						if(this.whitePieces.indexOf(this.tileContainsPiece(xCoord,yCoord)) > -1){
							if(this.tileContainsPiece(xCoord,yCoord).name=="king"){
								this.victoryBlack();
							}
							this.whitePieces.splice(this.whitePieces.indexOf(this.tileContainsPiece(xCoord,yCoord)),1);
						}else{
							if(this.tileContainsPiece(xCoord,yCoord).name=="king"){
								this.victoryWhite();
							}
							this.blackPieces.splice(this.blackPieces.indexOf(this.tileContainsPiece(xCoord,yCoord)),1);
						}

					}
				}

				this.getSelectedPiece().moveTo(xCoord,yCoord);
				this.refreshMoveSets();

				if(this.turn == false)
					this.turn = true;
				else
					this.turn = false;
			

				

			}else{

				if(this.tileContainsPiece(xCoord,yCoord) != null && this.tileContainsPiece(xCoord,yCoord).color == this.color){
					this.tileContainsPiece(xCoord,yCoord).selected = true;
					var array = this.tileContainsPiece(xCoord,yCoord).moveSet;
				
					for(var i = 0; i<array.length; i++){
						array[i].highlighted = true;
					}

				}else{
					this.files[yCoord][xCoord]
				}
			}

			this.getSelectedPiece().selected = false;
		}else{

			if(this.tileContainsPiece(xCoord,yCoord) != null && this.tileContainsPiece(xCoord,yCoord).color == this.color){
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

	this.victoryWhite = function(){
		console.log("Victory for White");

		contextGA.fillStyle = "#737373";
		contextGA.fillRect(0,0,canvasGA.width,canvasGA.height);


	}

	this.victoryBlack = function(){
		console.log("Victory for Black");

		contextGA.fillStyle = "#737373";
		contextGA.fillRect(0,0,canvasGA.width,canvasGA.height);

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
		for(var i = 0; i<this.blackPieces.length; i++){
			this.blackPieces[i].refreshMoveSet();
		}
	}


	this.KingIsInCheck = function(xCoord,yCoord, color){
		if(color == "white"){

			for(var i =0; i < blackPieces.length; i++){
				for(var j = 0; j < blackPieces[i].moveSet; j++){
					// if this tile's x and y = the x and y of the king
					
				}
			}

		}
	}

	this.refreshMoveSets();
	this.draw();
	
	




}


