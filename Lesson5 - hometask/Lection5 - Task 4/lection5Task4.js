let arr = [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1];

let i = 0, count = 1;
let startPos = 0;
do {
	if (arr[i + 1] === arr[i]) {
		count++;
	} else {
		arr.splice(startPos, count, count);
		startPos++;
		i = startPos - 1;
		count = 1;
	}
	i++;
} while (i < arr.length);

document.write(arr.toString());

