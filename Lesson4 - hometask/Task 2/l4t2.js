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

console.log('min=', min);
console.log('max=', max);
//output between min and max
let b = new Array();
(a.indexOf(min) > a.indexOf(max)) ? b = a.slice(a.indexOf(max) + 1, a.indexOf(min)) : b = a.slice(a.indexOf(min) + 1, a.indexOf(max));
console.log(a);
console.log(b);
