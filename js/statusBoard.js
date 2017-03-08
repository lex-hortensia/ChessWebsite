
function statusBoard(){
	this.x = 0;
	this.y = 0;
	this.width = 200;
	this.height = 640;	

	this.scoreBlack;
	this.scoreWhite;

	this.takenBlackPieces = [];
	this.takenWhitePieces = [];

	this.setScores = function(white, black){
		this.scoreBlack = black;
		this.scoreWhite = white;
	}

	this.addTakenPiece = function(piece){
		if(piece.color == "black"){
			this.takenBlackPieces.push(piece);
			console.log("Black piece taken")
		}else{
			this.takenWhitePieces.push(piece);
			console.log("White piece taken")
		}
	}
	

	this.draw = function() {


		
		contextGA.fillStyle="#FFFFFF";
		contextGA.strokeStyle="#000000";
		contextGA.font = "20px bold Times New Roman";
		contextGA.fillRect(this.x,this.y,this.width,this.height);
		contextGA.strokeRect(this.x,this.y,this.width,this.height);
		contextGA.fillStyle="#AAADAD";
		contextGA.fillRect(this.x,this.y+35,this.width,3);
		contextGA.fillRect(this.x,this.y+120,this.width,3);
		contextGA.fillStyle="#000000";
		
		contextGA.fillRect(this.x+190,this.y,10,this.height);


		contextGA.fillText("Status Board", this.x+40,this.y+25);


		contextGA.font = "17px bold Times New Roman";
		contextGA.fillText("Advantage", this.x+55,this.y+60);
		contextGA.font = "15px Times New Roman";
		if(this.scoreBlack > this.scoreWhite){
			contextGA.fillText("Black: +" + (this.scoreBlack-this.scoreWhite), this.x+57, this.y + 80);
		}else if(this.scoreBlack < this.scoreWhite){
			contextGA.fillText("White: +" + (this.scoreWhite-this.scoreBlack), this.x+55, this.y + 80);
		}else{
			contextGA.fillText("Even: " + this.scoreBlack + "-" + this.scoreWhite, this.x+59, this.y + 80);
		}

		contextGA.font = "17px bold Times New Roman";
		contextGA.fillText("Pieces Taken", this.x+52,this.y+150);

		contextGA.font = "15px bold Times New Roman";
		contextGA.fillText("White: ", this.x+10,this.y+185);
		contextGA.fillText("Black: ", this.x+10,this.y+385);

		for(var i = 0; i<this.takenWhitePieces.length; i++){
			contextGA.fillText(i+1+". "+this.takenWhitePieces[i].name, this.x + 60, this.y+185 + (i*15));
		}

		for(var i = 0; i<this.takenBlackPieces.length; i++){
			contextGA.fillText(i+1+". "+this.takenBlackPieces[i].name, this.x + 60, this.y+385+(i*15));
		}



		
		
	}
}