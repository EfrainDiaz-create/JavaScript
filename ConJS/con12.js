let num =1; let dato;

while (num<10)
{
    dato=prompt("Introduce número menor que 10:", "");
    num=parseInt(dato);

    document.write( + num );
}

document.write("Fin del programa");