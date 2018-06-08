n = 9;
separator = "*";
space = "&nbsp;";

// Прямоугольный треугольник
/*
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (j <= i) {
            document.write(separator);
        } else {
            document.write(space);
        }
    }
    document.write('<br>');
}
*/

// Равносторонний треугольник
/*
if (n % 2 === 0) {
    n--;
}

for (let i = 1; i <= Math.round(n / 2); i++) {
    for (let j = 1; j <= n; j++) {
        if (j >= Math.round(n / 2) - i + 1 && j <= Math.round(n / 2) + i - 1) {
            document.write(separator);
        } else {
            document.write(space);
        }
    }
    document.write('<br>');
}
*/

// Ромб
/*
if (n % 2 === 0) {
    n--;
}
let center = Math.round(n / 2);

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if ((i <= center && j >= center - i + 1 && j <= center + i - 1) ||
            (i > center && j >= i - center + 1 && j <= n - (i - center))) {
            document.write(separator);
        } else {
            document.write(space);
        }
    }
    document.write('<br>');
}
*/