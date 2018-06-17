const a = 1, b = 15;
let strOdd = strEven = '';

for (let i = a; i <= b; i++) {
    (i % 2 !== 0) ? strOdd += i : strEven += i;
}

document.write('<table>');
document.write('<tr>');
document.write('<td>' + strOdd + '</td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td>' + strEven + '</td>');
document.write('</tr>');
document.write('</table>');