let obj = {
	m1: m1,
	m2: m2,
	m3: m3
}

function m1() {
	console.log('m1');
	return this;
}

function m2() {
	console.log('m2');
	return this;
}

function m3() {
	console.log('m3');
	return this;
}