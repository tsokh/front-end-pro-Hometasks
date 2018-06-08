const n = 10;
let x = +prompt('Enter number: ', 0);
let decimal = x, inversed = '', digit = 0;

do {
    num = decimal % n;
    (num > digit) ? digit = num : false;
    decimal = Math.floor(decimal / n);
} while (decimal != 0);

console.log('Original number = ' + x);
console.log('Highest digit = ' + digit);