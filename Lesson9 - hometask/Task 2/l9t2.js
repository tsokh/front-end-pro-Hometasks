let str = '&#39;var_text_hello&#39;';

function convertStr(x) {
	let converted = '';
	let toUpper = false;
	for (let i = 0; i < x.length; i++) {
		if (x.charAt(i) === '_') {
			toUpper = true;
			continue;
		} else converted += (!toUpper) ? x.charAt(i) : (x.charAt(i)).toUpperCase();
		toUpper = false;	
	}

	return converted;
}

console.log(convertStr(str));