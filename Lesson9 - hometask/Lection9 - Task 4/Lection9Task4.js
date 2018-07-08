data = {
	addRecord: function () {
		let flag = false;
		
		for(let i = 0; i < arguments.length; i++) {
			for(let key in arguments[i]) {
				if (!flag) {
					this[key] = arguments[i][key];
				}
			}
		}
		return this;	
	},
	p: 600,
	str: 'hello',
	y: -50
}
