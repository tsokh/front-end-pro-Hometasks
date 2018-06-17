const n = 9, rangeMin = 0, rangeMax = 10, diff = 5;
let a = new Array(n);
let count = 0;

// array fill
for (let i = 0; i < a.length; i++) {
    a[i] = Math.floor(Math.random() * (rangeMax - rangeMin + 1) + rangeMin);
}

// find min in array
let min = a[0];
for (let i = 1; i < a.length; i++) {
    min = (a[i] < min) ? a[i] : min;
}

// count elements that have difference with min <= 5
for (let i = 0; i < a.length; i++) {
	(Math.abs(a[i] - min) <= diff) ? count++ : false;
}

console.log(a);
console.log(min);
console.log('Number of array elements = ', count - 1);