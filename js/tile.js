// Javascript File 01

function tile(xCoord, yCoord, white){
	this.x = xCoord;
	this.y = yCoord;

	this.width = tileSize;
	this.height = tileSize;
	white ? this.color="rgb(230,245,218)" : this.color="rgb(101,140,70)";
	this.highlighted = false;

	this.draw = function() {
		contextGA.fillStyle="#000000";
		//contextGA.strokeRect(this.x,this.y,this.width,this.height);
		contextGA.fillStyle=this.color;
		contextGA.fillRect(this.x,this.y,this.width,this.height);
	}

	this.drawHighlight = function(){
		contextGA.fillStyle="#000000";
		//contextGA.strokeRect(this.x,this.y,this.width,this.height);
		contextGA.fillStyle="rgba(255,255,0,0.5)";
		contextGA.fillRect(this.x,this.y,this.width,this.height);
	}



}