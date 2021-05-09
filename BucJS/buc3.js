let i, j;
let x = "<table>";

for (i=1; i <=10; i++) //10 filas
{
    x=x + "<tr>";

    for (j = 1; j <= i; j++) // numeros en cada fila
    x=x + "<td> El numero es </td>" + i;

    x=x + "</tr>";
}

x=x + "</table>";
document.getElementById("central").innerHTML=x;