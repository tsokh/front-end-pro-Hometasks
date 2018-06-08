const n = 10;
let x = +prompt('Enter number: ', 0);
let decimal = x, inversed = '';

do {
    num = decimal % n;
    inversed += num;
    decimal = Math.floor(decimal / n);
} while (decimal != 0);

console.log('Original number = ' + x);
console.log('inversed number = ' + +inversed);