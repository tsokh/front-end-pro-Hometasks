const n = 9, rangeMin = -42, rangeMax = 38;
let a = new Array(n);

// array fill
for (let i = 0; i < a.length; i++) {
    a[i] = Math.floor(Math.random() * (rangeMax - rangeMin + 1) + rangeMin);
}

// find min from even element positions
let min = a[0], start = 0;;
for (let i = start; i < a.length; i = i + 2) {
	min = (a[i] < min) ? a[i] : min;
}

console.log(min)