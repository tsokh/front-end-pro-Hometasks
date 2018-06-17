const x = 1, y = 100, data = 5, diff = 5;

for (i = x; i <= y; i++) {
    if (i >= data - diff && i <= data + diff)
        console.log(i);
}