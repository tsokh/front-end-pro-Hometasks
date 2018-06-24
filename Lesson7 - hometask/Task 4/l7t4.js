function doFunction(x, y, doMath) {
	let countNumArgs = 0;
	for (let i = 0; i < arguments.length; i++) {
		(typeof arguments[i] === 'number') ? countNumArgs++ : false;
	}

	if (countNumArgs === 1 && arguments[1].name === 'factorial') {
		return factorial(x);
	}
}

function factorial(x) {
	let factorial = 1;

	for (let i = x; i > 0; i--) {
		factorial *= i;
	}

	return factorial;
}