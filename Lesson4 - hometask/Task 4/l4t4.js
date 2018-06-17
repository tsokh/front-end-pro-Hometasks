let a = [1, 5, 6, 2, 4, 9];

// reverse array
for (let i = 0; i < a.length; i++) {
	a.splice(i, 0, a[a.length - 1]);
	a.length -= 1;
}

console.log(a);
