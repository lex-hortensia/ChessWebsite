// Javascript File 01

var files = [];

for(var i = 0; i<8; i++){
	files[i] = [];
}


var rank = "abcdefgh";
for(var i = 0; i<8; i++){
	for(var j = 0; j<8;j++){
		files[i][j] = rank[j];
	}
}

