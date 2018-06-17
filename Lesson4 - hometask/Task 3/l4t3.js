const n = 9, rangeMin = -50, rangeMax = 500;
let a = new Array(n);

// array fill
for (let i = 0; i < a.length; i++) {
    a[i] = Math.floor(Math.random() * (rangeMax - rangeMin + 1) + rangeMin);
}

// find min & max numbers in array
let min = a[0], max = a[0];
for (let i = 1; i < a.length; i++) {
    (a[i] < min) ? min = a[i] : (a[i] > max) ? max = a[i] : false;
}

console.log(a);
console.log('min=', min);
console.log('max=', max);

// swap min & max
temp = a.indexOf(max);
a.splice(a.indexOf(min), 1, max);
a.splice(temp, 1, min);

console.log(a);