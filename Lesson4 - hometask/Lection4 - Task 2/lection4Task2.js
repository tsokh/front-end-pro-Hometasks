const rangeMin = 0, rangeMax = 8;

let a = new Array(8), b = new Array(9);

for (let i = 0; i < a.length; i++) {
    a[i] = Math.floor(Math.random() * (rangeMax - rangeMin + 1) + rangeMin);
}

for (let i = 0; i < b.length; i++) {
    b[i] = Math.floor(Math.random() * (rangeMax - rangeMin + 1) + rangeMin);
}

// check for similar items in arrays
let simArr = new Array();
for (let i = 0; i < a.length; i++) {
	for (let j = 0; j < b.length; j++) {
		 if (a[i] === b[j]) {
		 	simArr.push(a[i]);
		 	break;
		 }
	}
}

for (let i = 0; i < simArr.length; i++) {
	let checkNum = simArr[i];
	for (let j = i + 1; j < simArr.length; j++) {
		if (checkNum === simArr[j]) {
			simArr.splice(j, 1);
			j = i;	
		}
	}
}

console.log(simArr);

// count removed elements from arrays
let countA = countB = 0;
for (let i = 0; i < simArr.length; i++) {
	// remove similar items from array A
	for (let j = 0; j < a.length; j++) {
		if (simArr[i] === a[j]) {
			countA++;
			delete a[j];
		}
	}
	// remove similar items from array B
	for (let j = 0; j < b.length; j++) {
		if (simArr[i] === b[j]) {
			countB++;
			delete b[j];
		}
	}
}

// squeeze arrays from empty values

// for array A
for (let i = 0; i < a.length; i++) {
	if (a[i] == undefined) {
		for (let j = i + 1; j < a.length; j++) {
			if (a[j] != undefined) {
				a[i] = a[j];
				delete a[j];
				break;
			}
		}
	}
}
a.length -= countA;


// for array B
for (let i = 0; i < b.length; i++) {
	if (b[i] == undefined) {
		for (let j = i + 1; j < b.length; j++) {
			if (b[j] != undefined) {
				b[i] = b[j];
				delete b[j];
				break;
			}
		}
	}
}
b.length -= countB;

console.log(a);
console.log(b);