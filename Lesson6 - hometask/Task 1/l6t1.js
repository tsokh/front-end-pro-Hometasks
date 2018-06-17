const n = 10, m = 7, minRange = 0, maxRange = 99;
let arr = new Array(n);

function fillArr(arr, n, m, rangeFrom, rangeTo) {
	for (let i = 0; i < n; i++) {
		arr[i] = new Array(m);
		for (let j = 0; j < m; j++) {
			arr[i][j] = Math.floor(Math.random() * (rangeTo - rangeFrom + 1) + rangeFrom);
		}
	}
}

fillArr(arr, n, m, minRange, maxRange);
console.log(arr);