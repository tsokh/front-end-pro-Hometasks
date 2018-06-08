const min = 0, max = 20;
const range1 = 4, range2 = 2, range3 = 1;
const alert1 = 'холодно', alert2 = 'тепло', alert3 = 'несите мне азот';

//generate number
let x = Math.floor(Math.random() * (max - min) + 1);
let num = '';

do {
	num = +prompt('Введите число: ', 0);
	(Math.abs(num - x) > range1) ? alert(alert1) : (Math.abs(num - x) > range2) ? alert(alert2) : (Math.abs(num - x) >= range3) ? alert(alert3) : false;
} while (num !== x);

alert('Bingo!');