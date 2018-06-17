const n = 9, rangeMin = -50, rangeMax = 500;
let a = new Array(n);

// array fill
for (let i = 0; i < a.length; i++) {
    a[i] = Math.floor(Math.random() * (rangeMax - rangeMin + 1) + rangeMin);
}

let i = 0;
do {
    let temp = a[i];
    a[i] = a[i + 1];
    a[i + 1] = temp;
    i += 2;
} while (i + 1 < a.length);

console.log(a);