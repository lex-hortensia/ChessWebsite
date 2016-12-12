function bishop(xCoord,yCoord){
	this.x = xCoord;
	this.y = yCoord;

	this.width = tileSize/2;
	this.height = tileSize/2;


	this.draw = function(){
		contextGA.fillStyle="#000000";
		contextGA.strokeRect(this.x*tileSize+ tileSize/4,this.y*tileSize + tileSize/4,this.width,this.height);
		contextGA.fillStyle=this.color;
		contextGA.fillRect(this.x*tileSize+ tileSize/4,this.y*tileSize+ tileSize/4,this.width,this.height);
	}

}