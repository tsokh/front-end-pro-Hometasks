let flag=true;

do {
    x = +prompt('Enter x: ', 0);
    y = +prompt('Enter y: ', 0);

    flag = isNaN(x) || isNaN(y);
    if (flag) {
        console.error('invalid values');
    }
} while(flag);

sum = 0;
if (x <= y) {
    for(i = x; i <= y; i++){
        if (i % 2 != 0) {
            sum += i;
        }
    }
} else {
    for(i = x; i >= y; i--){
        if (i % 2 == 0) {
            sum += i;
        }
    }
}

console.log('sum = ' + sum);