let obj = {
	x: 10,
	y: 20,
	renderObject: renderObject 
}

function renderObject() {
	// console.log(arguments);
	for (let key in this) {
		(arguments['callee'] !== this[key]) ? 
			document.write(key + ':' + this[key] + ', ') : false;
	}
}