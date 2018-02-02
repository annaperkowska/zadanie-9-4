var text = ('Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.'),
	dinosaur = ('Triceratops'),
	dinosaurUpperCased = dinosaur.toUpperCase(),
	textCorrect = text.replace('Velociraptor', dinosaurUpperCased);

textCorrect = textCorrect.slice(0, textCorrect.length/2);

console.log(textCorrect);