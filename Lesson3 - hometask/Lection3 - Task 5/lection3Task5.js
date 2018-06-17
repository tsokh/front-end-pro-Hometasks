const separator = "*", space = "&nbsp;";

let m = +prompt('Enter m ', 1);
let n = +prompt('Enter n ', 1);

for (i = 1; i <= n; i++) {
    for(j = 1; j <= m; j++){
        if (i == 1 || i == n || j == 1 || j == m){
            document.write(separator);
        } else {
            document.write(space);
        }
    }

    document.write("<br />"); 
}