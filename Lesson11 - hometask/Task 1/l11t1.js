function L1 () {

}

L1.prototype.render = function (x) {
	return this.x;
}
L1.prototype.clear = function (x) {
	this.x = 0;
}

function L2 () {

}

L2.prototype = new L1();

L2.prototype.sum = function (int1, int2) {
	let res = Math.pow(int1 + int2, 2);
	this.setValue(res);
	return res;
}
L2.prototype.div = function (int1, int2) {
	let res = Math.pow(int1 / int2, 2);
	this.setValue(res);
	return res;
}
L2.prototype.mul = function (int1, int2) {
	let res = Math.pow(int1 * int2, 2);
	this.setValue(res);
	return res;
}
L2.prototype.setValue = function (res) {
	L1.prototype.x = res;
}

function L3 () {
	this.arr = [];
	this.arr.length = 200;
	let min = 0, max = 50;
	for (let i = 0; i < this.arr.length; i++) {
		this.arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
	}	
}

L3.prototype = new L2();
L3.prototype.reInit = function () {
	for (let i = 0; i < this.arr.length; i++) {
		let min = 0, max = 50;
		this.arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
	}	
}


function L4 () {

}

L4.prototype = new L3();

ex1 = new L4();
console.log(ex1);