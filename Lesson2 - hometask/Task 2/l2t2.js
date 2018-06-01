let a = +prompt('Введите число а: ', 0);
let b = +prompt('Введите число b: ', 0);
let h = +prompt('Введите шаг: ', 1);

let sumFactorial = 0, factorial = 1;

// preliminary checks
if (a < b && h > 0 && a >= 0) {
	// main cycle between a & b
	for (let i = a; i < b; i = i + h) {
		// factorial calculation
		if (i !== 0) {
			factorial = 1;
			for (let j = 1; j <= i; j++) {
				factorial *= j;
			}
		}
		// console.log('Number =', i, ' factorial = ', factorial);
		// sum of factorials
		sumFactorial += factorial; 
	}
}

// output
console.log('Сума факториалов чисел = ' + sumFactorial);