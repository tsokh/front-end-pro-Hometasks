const n = 9, rangeMin = -42, rangeMax = 38;
let a = new Array(n);

// array fill
for (let i = 0; i < a.length; i++) {
    a[i] = Math.floor(Math.random() * (rangeMax - rangeMin + 1) + rangeMin);
}

let min = a[0], minInd = 0;
for (let i = 1; i < a.length; i++) {
	if (a[i] < min) {
		min = a[i];
		minInd = i;
	} 
}

if (min !== a[0]) {
	let temp = a[0];
	a[0] = min;
	a[minInd] = temp;
}

console.log(a);