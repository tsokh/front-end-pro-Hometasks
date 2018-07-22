function Field (width, height) {
	this.width = width;
	this.height = height;
	let arr = new Array(height);
	for (let i = 0; i < arr.length; i++) {
		arr[i] = new Array(width);
		for (let j = 0; j < arr[i].length; j++) {
			arr[i][j] = 0;
		}
	}
	this.arr = arr;
}

// render on page
Field.prototype.renderField = function () {
	document.write('<hr />');
	for(let i = 0; i < this.arr.length; i++) {
		for(let j = 0; j < this.arr[i].length; j++) {
			document.write(this.arr[i][j] + ' ');
		}
	document.write('<br>');
	}
	document.write('<hr />');
}

// remove everything from field
Field.prototype.clearField = function () {
	for (let i = 0; i < this.arr.length; i++) {
		for (let j = 0; j < this.arr[i].length; j++) {
			this.arr[i][j] = 0;
		}
	}
}

// change field size
Field.prototype.changeSize = function (newX, newY) {
	field = new Field(newX, newY);
}

//Person(name, XPosition, YPosition)
function Person(name, XPosition, YPosition) {
	this.name = name;
	this.x = XPosition;
	this.y = YPosition;
	this.originX = XPosition;
	this.originY = YPosition;
	this.SetMove = function(obj) {
		field.arr[this.x - 1][this.y - 1] = 0;
		this.x = obj.x;
		this.y = obj.y;
		field.arr[this.x - 1][this.y - 1] = name;
	}
}

// place person on field
Person.prototype.start = function () {
	field.arr[this.originX - 1][this.originY - 1] = this.name;
}

// move on field
Person.prototype.go = function (direction, step) {
	switch(direction) {
		case 'left': 
			if (this.y - step - 1 >= 0) {
				this.SetMove({x: this.x, y: this.y - step});
			} else console.log('can not move to position');
			break;
		case 'right':
			if (this.y + step < field.arr[0].length) {
				this.SetMove({x: this.x, y: this.y + step});
			} else console.log('can not move to position');
			break;
		case 'top':
			if (this.x - step - 1 >= 0) {
				this.SetMove({x: this.x - step, y: this.y});
			} else console.log('can not move to position');
			break;
		case 'bottom':
			if (this.x + step < field.arr.length) {
				this.SetMove({x: this.x + step, y: this.y});
			} else console.log('can not move to position');
			break;
	}
}

// go to original position
Person.prototype.resetPosition = function () {
	field.arr[this.x - 1][this.y - 1] = 0;
	this.start();
}

let field = new Field(10, 10);
let person = new Person('1', 1, 4);