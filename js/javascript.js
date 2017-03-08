// Javascript File 03



var b = new board();


function generateNewBoard(){
	b = new board();
	 
}


function processMouseInput(event) {
	var relX = event.clientX - canvasGA.offsetLeft;
	var relY = event.clientY - canvasGA.offsetTop;

	var arrayX = Math.floor(relX/tileSize);
	var arrayY = Math.floor(relY/tileSize);

	b.selectTile(arrayX,arrayY);
	 
}

canvasGA.addEventListener('click',processMouseInput);















