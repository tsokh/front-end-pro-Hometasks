function inArray(str, arr) {
	for (let i = 0; i < arr.length; i++) {
		if (str === arr[i]) return true;
	}
	return false;
}