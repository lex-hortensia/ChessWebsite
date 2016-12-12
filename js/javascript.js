// Javascript File 01



var b = new board();


function processMouseInput(event) {
	var relX = event.clientX - canvasGA.offsetLeft;
	var relY = event.clientY - canvasGA.offsetTop;

	var arrayX = Math.floor(relX/tileSize);
	var arrayY = Math.floor(relY/tileSize);

	console.log('CLICK at ' + relX + ', '+relY);
	
	b.draw();

	b.files[arrayY][arrayX].highlight();
}

canvasGA.addEventListener('click',processMouseInput);



b.draw();














