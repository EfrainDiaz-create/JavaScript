let nota1, nota2;
let dato1, dato2;

dato1 =window.prompt("Primer número?", "0");
nota1 = parseInt(dato1);
dato2 =window.prompt("Segundo número?", "0");
nota2 = parseInt(dato2);

if (num1 > num2)
{
    resultado = "El mayor es el primero " + num1;
}
else
{
    if (num2 > num1)
    {
        resultado = "El mayor es el segundo" + num2;
    }
    else
    {
        resultado = "Los números son iguales"
    }  
}