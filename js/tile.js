function tile(xCoord, yCoord, white){
	this.x = xCoord;
	this.y = yCoord;

	this.width = tileSize;
	this.height = tileSize;
	white ? this.color="#FFFFFF" : this.color="#90D49A";

	this.draw = function() {
		contextGA.fillStyle="#000000";
		contextGA.strokeRect(this.x,this.y,this.width,this.height);
		contextGA.fillStyle=this.color;
		contextGA.fillRect(this.x,this.y,this.width,this.height);
	}

	this.highlight = function(){
		contextGA.fillStyle="#000000";
		contextGA.strokeRect(this.x,this.y,this.width,this.height);
		contextGA.fillStyle="#DDFA20";
		contextGA.fillRect(this.x,this.y,this.width,this.height);
	}


	
}