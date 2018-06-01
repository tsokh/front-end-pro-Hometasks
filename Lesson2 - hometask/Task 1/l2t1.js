let n = +prompt('Введите количество чисел Фибоначчи:', 0);
//initial Fibonacci num sequence
let fibNum0 = 0, fibNum1 = 1, i = 1; 

//Fibonacci output
if (n === 0) {
	console.log(0);
} else {
	while (i <= n) {
		console.log(fibNum1);
		//temp var to store next Fib number
		fibNum = fibNum0 + fibNum1;
		fibNum0 = fibNum1;
		//storing new Fib num
		fibNum1 = fibNum;
		i++;
	}
} 