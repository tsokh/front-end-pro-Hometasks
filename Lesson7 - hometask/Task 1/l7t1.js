function getCentralElements() {
	let  centerElements = new Array();

	for (let i = 0; i < arguments.length; i++) {
		let centerOfArray = Math.ceil(arguments[i].length / 2) - 1;
		centerElements.push(arguments[i][centerOfArray]);
		// if array.length is Even
		(arguments[i].length % 2 === 0) ? centerElements.push(arguments[i][++centerOfArray]) : false;
	}

	return centerElements;
}


