
const mathZnak = new RegExp('[\\+\\-\\*\\/\\%\\^]');

//do math operation
function doMath(x, znak, y) {
	if (znak.match(mathZnak) && znak.length === 1) {
		if (znak === '^') return Math.pow(x, y)
		 else return eval(x + znak + y);
	} else return alert('invalid parameters');
}

let x = +prompt('Enter x: ', 0);
let y = +prompt('Enter y: ', 0);
let znak = prompt('Enter math operand: ');

alert(doMath(x, znak, y));