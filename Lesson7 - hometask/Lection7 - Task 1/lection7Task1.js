function f() {
	console.log(arguments);
	let arr = [];
	for (let i = 0; i < arguments.length; i++) {
		arr = arr.concat(arguments[i]);
	}
	return arr;
}

// f([1, 2, 3], [3, 6, 3223], [2, 8, 5, 7, 457, 4]);