function map(fn, array) {
	let newArr = [];
	for (let i = 0; i < array.length; i++) {
		newArr.push(fn(array[i]));
	}
	return newArr;
}

function square(x) {
	return x * x;
}

