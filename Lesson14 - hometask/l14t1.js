window.onload = function() {
	let rangeInputElem = document.querySelector('#rangeInput');
	let numInputElem = document.querySelector('#numInput');

	rangeInputElem.addEventListener('change', function(event) {
		numInputElem.value = this.value;
		setDiagram(this.value);
	});
	numInputElem.addEventListener('change', function(event) {
		rangeInputElem.value = this.value;
		setDiagram(this.value);
	})

	let containerElem = document.querySelector('.block');
	function setDiagram(num) {
		let arrElem = containerElem.querySelectorAll('.block > div');
		arrElem[0].style.height = num + 'px';

		//commission calculation
		const commission = {
			commissionVal: [2, 4, 6, 8], 
			commissionRange: [20, 50, 75, 100]
		};
		for (let i = 0; i < commission.commissionRange.length; i++) {
			if (num <= commission.commissionRange[i]) {
				comNum = num * commission.commissionVal[i] / 100;
				break;
			}

		}
		arrElem[1].style.height = comNum + 'px';

		document.querySelector('label').innerHTML = +num + comNum;
	}

}