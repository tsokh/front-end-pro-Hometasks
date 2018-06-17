
//compare sum of Num elements
function compare(arr1, arr2) {
	let sum1 = sum2 = 0;
	for (let i = 0; i < arr1.length; i++) {
		(!isNaN(+arr1[i])) ? sum1 += +arr1[i] : false;
	}

	for (let i = 0; i < arr2.length; i++) {
		(!isNaN(+arr2[i])) ? sum2 += +arr2[i] : false;
	}
	// console.log(sum1);
	// console.log(sum2);

	if (sum1 > sum2) {
		return arr1;	
	} else if (sum1 < sum2) {
		return arr2;
	}
}

let arr1 = [0, '76', '8i', 'ui'], arr2 = ['8', 10, 'a', '&6'];

console.log(compare(arr1, arr2));
