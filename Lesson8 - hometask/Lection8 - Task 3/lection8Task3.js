function assignObjects() {
	let newObject = {};
	for (let i = 0; i < arguments.length; i++) {
		for (let key in arguments[i]) {
			newObject[key] = arguments[i][key];
		}
	}
	return newObject;
}

obj1 = {
	x: 10,
	y: 20
}

obj2 = {
	x: 20,
	z: 30
}