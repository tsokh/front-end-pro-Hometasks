function assignObjects(obj1, obj2, flag) {
	let newObject = {};
	if (flag === undefined) flag = false;
	if (flag) {

		for (let i = 1; i >= 0; i--) {
			for (let key in arguments[i]) {
				newObject[key] = arguments[i][key];
			}
		}
	} else {

		for (let i = 0; i < 2; i++) {
			for (let key in arguments[i]) {
				newObject[key] = arguments[i][key];
			}
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