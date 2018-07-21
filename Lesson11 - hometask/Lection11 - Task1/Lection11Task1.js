const mathZnak = new RegExp('[\\+\\-\\*\\/\\%\\^]');

function SuperMath() {
	this.check = function(obj) {
		if (confirm("Произвести действие " + obj.znak + ' с ' + obj.x + " и " + obj.y)) {

			return this.znak(obj); } else {
				return this.input(); 
			}
	}

	this.input = function() {
		obj.x = +prompt('Enter x: ', 0);
		obj.y = +prompt('Enter y: ', 0);
		do {
			obj.znak = prompt('Enter znak:', '+');
		} while (!obj.znak.match(mathZnak)); 
		return obj;
	}
}

SuperMath.prototype.znak = function (obj) {
	if (obj.znak.match(mathZnak) && obj.znak.length === 1) {
		if (obj.znak === '^') return Math.pow(obj.x, obj.y)
		 else return eval(obj.x + obj.znak + obj.y);
	} else return alert('invalid parameters');
}

let obj = { x:12, y:3, znak: "/"};
p = new SuperMath();