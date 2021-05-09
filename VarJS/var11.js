let dato1, dato2, num1, num2;

dato1 = window.prompt("Introduce primer numero ?", "0");
num1 = parseInt(dato1);
dato2 = window.prompt("Introduce segundo numero ?", "0");
num2 = parseInt(dato2);

let resultado1 = num1 - num2;
let resultado2 = num1 * num2;

document.write("<br/> <br/> La resta es " + resultado1);
document.write("<br/> <br/> La multiplicación es " + resultado2);