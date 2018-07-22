// task1
function SuperArray(n, m, options) {
	let arr = new Array(n);
	for(let i = 0; i < arr.length; i++) {
		arr[i] = new Array(m);
		for(let j = 0; j < arr[i].length; j++) {
			arr[i][j] = Math.floor(Math.random() * (options['max'] - options['min'] + 1)) + options['min'];
		}
	}	
	this.arr = arr;	
}

// task2
SuperArray.prototype.render = function (separator) {

	for(let i = 0; i < this.arr.length; i++) {
		for(let j = 0; j < this.arr[i].length; j++) {
			document.write(this.arr[i][j] + ' ');
		}
	document.write('<br>');
	}
	for(let i = 0; i < this.arr[0].length; i++) {
		document.write(separator);
	}
	document.write('<br>');
}

// task3
SuperArray.prototype.clear = function (direction, k) {
	//strategy [direct] execute
	let self = this;
	let strategy = {
		row: function (k) {
			for(let j = 0; j < self.arr[k - 1].length; j++) {
				self.arr[k - 1][j] = 0;
			}
		},
		column: function (k) {
			for(let i = 0; i < self.arr.length; i++) {
				self.arr[i][k - 1] = 0;
			}
		}
	}
	strategy[direction](k);
}

// task4
SuperArray.prototype.setMarker = function (obj) {
	this.marker = obj;
	this.arr[obj.x - 1][obj.y - 1] = '&';
}

// task5
SuperArray.prototype.goTo = function (obj) {
	this.arr[this.marker.x - 1][this.marker.y - 1] = '00';
	this.setMarker(obj);
}

// task6
SuperArray.prototype.shift = function (direction) {
	switch(direction) {
		case 'left': 
			if (this.marker.y - 2 >= 0) {
				this.goTo({x: this.marker.x, y: this.marker.y - 1});
			}
			break;
		case 'right':
			if (this.marker.y < this.arr[0].length) {
				this.goTo({x: this.marker.x, y: this.marker.y + 1});
			}
			break;
		case 'top':
			if (this.marker.x - 2 >= 0) {
				this.goTo({x: this.marker.x - 1, y: this.marker.y});
			}
			break;
		case 'bottom':
			if (this.marker.x < this.arr.length) {
				this.goTo({x: this.marker.x + 1, y: this.marker.y});
			}
			break;
	}
}

let p = new SuperArray(6, 9, {min: 10, max: 99});