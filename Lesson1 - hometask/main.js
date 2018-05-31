let r = +prompt('Введите радиус цилиндра: ', 0);;
let h = +prompt('Введите высоту цилиндра: ', 0);
//round PI to 3.14
const pi = Math.round (Math.PI * 100) / 100;

// площадь основы
s = pi * Math.pow (r, 2);
// объем цилиндра
v = pi * Math.pow(r, 2) * h;
console.log(v);

//output
document.write('**************');
document.write('<br>');
document.write('Обьем цилиндра с площадью основы ', s , ' , радиусом ', r, ' и высотой ', h, ' равен:');
document.write('<br>');
document.write('--------------------');
document.write('<br>');
document.write('V = ', Math.round(v * 1000) / 1000);
document.write('<br>');
document.write('--------------------');
document.write('<br>');
document.write('end.');

