let obj = {
	copy: function (buffer) {
		this['buffer'] = '';
		return this;
	},
	clear: function () {
		this.result = 0;
		return this;
	},
	doFunction: function (func, x, y) {
		this.result = func(x, y);
		return this;
	}
}

function sum(x, y) {
	return x + y;
}

function mul(x, y) {
	return x * y;
}


obj.doFunction(sum, 2, 4).doFunction(mul, 6, 3);