const rangeMin = -20, rangeMax = 45, twoNum = 10;

let n = +prompt('Enter n: ', 1);
let a = new Array(n);

for (let i = 0; i < a.length; i++) {
    a[i] = Math.floor(Math.random() * (rangeMax - rangeMin + 1) + rangeMin);
    if (a[i] / twoNum >= 1 && a[i] / twoNum < twoNum) {
      document.write(a[i]);
      document.write('<br>');  
    } 
}