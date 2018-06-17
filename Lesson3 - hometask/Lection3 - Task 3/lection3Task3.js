let a = +prompt('Enter a: ', 0);
let b = +prompt('Enter b: ', 0);

for (let i = a; i <= b; i++) {
    (i < 0) ? console.log(-Math.pow(i, 2)) : console.log(Math.pow(i, 2));
}