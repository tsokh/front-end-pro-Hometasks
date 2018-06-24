function factory(arr) {
	let i = -1;
	return function() {
		return arr[++i];
	}
}

var step = factory([2, 8, 9, 2, 4]);