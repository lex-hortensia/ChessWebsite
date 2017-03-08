
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
	

	this.draw = function() {


		
		contextGA.fillStyle="#FFFFFF";
		contextGA.strokeStyle="#000000";
		contextGA.font = "20px Times New Roman";
		contextGA.fillRect(this.x,this.y,this.width,this.height);
		contextGA.strokeRect(this.x,this.y,this.width,this.height);
		contextGA.fillStyle="#AAADAD";
		contextGA.fillRect(this.x,this.y+35,this.width,3);
		contextGA.fillStyle="#000000";
		contextGA.fillRect(this.x+190,this.y,10,this.height);

		contextGA.fillText("Status Board", this.x+40,this.y+25);



		contextGA.font = "17px Times New Roman";
		contextGA.fillText("Advantage", this.x+55,this.y+60);
		contextGA.font = "15px Times New Roman";
		if(this.scoreBlack > this.scoreWhite){
			contextGA.fillText("Black: +" + (this.scoreBlack-this.scoreWhite), this.x+57, this.y + 80);

		}else if(this.scoreBlack < this.scoreWhite){
			contextGA.fillText("White: +" + (this.scoreWhite-this.scoreBlack), this.x+55, this.y + 80);
		}else{
			contextGA.fillText("Even: " + this.scoreBlack + "-" + this.scoreWhite, this.x+59, this.y + 80);
		}


		
		
	}
}