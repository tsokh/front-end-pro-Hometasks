function factory(arr) {
	let i = -1;
	return function(callback) {
		x = arr[++i];
		return callback(x);
	}
}

function sqr(x) {
	return x * x;
}

var step = factory([2, 8, 9, 2, 4]);
console.log(step(sqr));