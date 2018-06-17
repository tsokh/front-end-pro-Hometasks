const n = 6, m = 4, rangeMax = 10, rangeMin = 0;
let sumRowArr = new Array();
let a = new Array(n);

document.write('Original array: <br>');
// array fill
for (let i = 0; i < a.length; i++) {
	a[i] = new Array(m);
	let sumRow = 0;
	for (let j = 0; j < a[i].length; j++) {
		a[i][j] = Math.floor(Math.random() * (rangeMax - rangeMin + 1) + rangeMin);
		// calc sum of elements in a row
		sumRow += a[i][j];
		document.write(a[i][j] + ' ');
	}
	sumRowArr.push(sumRow);
	document.write('\\\\ sum = ' + sumRow);
	document.write('<br>');
}

// check for min & max row index
let minRowInd = maxRowInd = 0, sumRowMin = sumRowMax = sumRowArr[0];
for (let i = 1; i < sumRowArr.length; i++) {
	if (sumRowArr[i] > sumRowMax) {
		sumRowMax = sumRowArr[i];
		maxRowInd = i;
	} else if (sumRowArr[i] < sumRowMin) {
		sumRowMin = sumRowArr[i];
		minRowInd = i;
	}

}

console.log('Row with minimal sum = ' + minRowInd);
console.log('Row with maximal sum = ' + maxRowInd);

// swap min and max rows
let j = m - 1;
do {
	let temp = a[minRowInd][j];
	a[minRowInd][j] = a[maxRowInd][j];
	a[maxRowInd][j] = temp;
	j--;
} while (j >= 0);

// output array with swapped rows
document.write('<br>');
document.write('<hr>');
document.write('Array with swapped rows: <br>');
for (let i = 0; i < a.length; i++) {
	for (let j = 0; j < a[i].length; j++) {
		document.write(a[i][j] + ' ');
	}
	document.write('<br>');
}