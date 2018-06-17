const n = 20, rangeMin = 0, rangeMax = 10; 
const diff = 1; // 1 == 100%
let a = new Array(n);
let sum = 0;
// array fill
for (let i = 0; i < a.length; i++) {
    a[i] = Math.floor(Math.random() * (rangeMax - rangeMin + 1) + rangeMin);
    sum += a[i];
}

let avg = sum / (a.length - 1);
// original array
document.write(a.toString() + '<br>');
document.write('Average = ' + Math.floor(avg * 100) / 100 + '<br>')

for (let i = 0; i < a.length; i++) {
	((a[i] - avg) / avg > diff) ? document.write(a[i] + ' ') : false;
}

