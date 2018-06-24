function getMaxs() {
	let newStrMaxs = '';

	for (let i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
		newStrMaxs += findMax(arguments[i]) + ', '; 
	}

	return newStrMaxs;
}

function findMax(arr) {
	let maxNum = arr[0];
	for (let i = 0; i < arr.length; i++) {
		maxNum = (arr[i] > maxNum) ? arr[i] : maxNum;
	}
	return maxNum;
}

