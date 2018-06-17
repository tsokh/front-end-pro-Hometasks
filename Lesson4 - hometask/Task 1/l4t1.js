const n = 9, rangeMin = -50, rangeMax = 500;
let a = new Array(n);

// array fill
for (let i = 0; i < a.length; i++) {
    a[i] = Math.floor(Math.random() * (rangeMax - rangeMin + 1) + rangeMin);
}

// check for prime numbers
const multipliers = [2, 3, 5, 7];
var b = new Array();
for (let i = 0; i < a.length; i++) {
    let prime = true;
    for (let j = 0; j < multipliers.length; j++) {
        if (a[i] === multipliers[j]) {
            break;
        } else if (a[i] % multipliers[j] === 0) {
            prime = false;
            break;
        }
    }
    (prime) ? b.push(a[i]) : false;
}

console.log(a);
console.log(b);

// find min & max numbers in array

let min = a[0], max = a[0];
for (let i = 1; i < a.length; i++) {
    (a[i] < min) ? min = a[i] : (a[i] > max) ? max = a[i] : false;
}

console.log(a);
console.log('min: ' + min);
console.log('max: ' + max);