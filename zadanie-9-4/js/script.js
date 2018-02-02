function drawTree(rows) {
	for (var i = 0 ; i < rows ; i++) {
		var star = "";
		for (var j = 0; j <= rows - i; j++) {
			star += " ";
		}
		for (var k = 0 ; k <= i ; k++) {
			star += "* "
		}
		console.log(star);
	}
}
drawTree(prompt("Ile poziomów ma mieć choinka. Podaj liczbę")); 
