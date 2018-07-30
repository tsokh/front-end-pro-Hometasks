window.onload = function() {
	let params = {
		h: 100,
		step: 5,
		crtlWidth: 115,
		crtlHeight: 60
	}

	let div = document.createElement('DIV');
	div.classList.add('block');
	document.body.appendChild(div);

	let divStyle = getComputedStyle(div);
	params.left = parseInt(divStyle.left, 10);
	params.top = parseInt(divStyle.top, 10);
	params.divHeight = parseInt(divStyle.height, 10);
	params.divWidth = parseInt(divStyle.width, 10);

	let crowl = false;
	function press(event) {
		console.log(event.keyCode);
		//ctrl
		if (!crowl && event.ctrlKey) {
			crowl = true;
			div.classList.toggle('crowl', true);
		}

		switch (event.keyCode) {
			//space
			case 32:
				if (params.top - params.h >= 0 && !crowl) {
					div.style.top = params.top - params.h + 'px';
					params.top -= params.h;
					setTimeout(function () {
						div.style.top = params.top + params.h + 'px';
						params.top += params.h;
					}, 300);
				}
				break;
			//right
			case 39:
				if (params.left + params.step + params.divWidth <= window.outerWidth) {
					div.style.left = params.left + params.step + 'px';
					params.left += params.step;
				}
				break;
			//left
			case 37:
				if (params.left - params.step >= 0) {		
					div.style.left = params.left - params.step + 'px';
					params.left -= params.step;	
				}
				break;
			//up
			case 38:
				if (params.top - params.step >= 0 && !crowl) {
					div.style.top = params.top - params.step + 'px';
					params.top -= params.step;
				}
				break;
			//down
			case 40:
				if (params.top + params.step + params.divHeight <= window.outerHeight && !crowl) {
					div.style.top = params.top + params.step + 'px';
					params.top += params.step;
				}
				break;
		}
	}

	function unpressed(event) {
		switch (event.keyCode) {
			case 17:
				if (crowl) {
					crowl = false;
					div.classList.toggle('crowl', false);
				}
		}
	}

	document.addEventListener('keydown', press);
	document.addEventListener('keyup', unpressed);
}