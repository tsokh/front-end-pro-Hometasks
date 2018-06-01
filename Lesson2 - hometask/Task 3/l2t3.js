const a = 0, b = 100;

document.write('<table>');
document.write('<tr>');
document.write('<th> Четные числа от ' + a + ' до ' + b + ' </th>');
document.write('</tr>')

if (a % 2 === 0) {
	i = a;
} else {
	i = a + 1;
}
while (i <= b) {
	document.write('<tr>');
	document.write('<td>' + i + '</td>');
	document.write('</tr>');
	i += 2;
}