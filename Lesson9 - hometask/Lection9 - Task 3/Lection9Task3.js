data = {
	addRecord: function () {
		console.log(arguments);
		for(let i = 0; i < arguments.length; i++) {
			for(let key in arguments[i]) {
				this[key] = arguments[i][key];
			}
		}
		return this;	
	},
	p: 600,
	str: 'hello',
	y: -50
}
