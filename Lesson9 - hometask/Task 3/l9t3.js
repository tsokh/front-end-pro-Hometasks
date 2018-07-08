function inArray (str, arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].includes(str)) {
			return console.log('true');
		}
	}
	return console.log('false');
}


inArray('foo', ['sjhfnaof', 'affoasf', 'dfhdfhdfh'])