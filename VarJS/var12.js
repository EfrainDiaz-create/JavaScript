{
    var contador;
    contador=1;
    while (contador<5)
    {
        let dato=prompt("Introduce número del 1 al 10:", " ");
        var num=parseInt(dato); // en esta parte sustituimos "let" por "var" para mostrar el último numero ingresado
        //que corresponde al ejercicio 13
        document.write("El numero introducido es " + num);
        document.write("</br>");
        document.write("El contador es " + contador);
        document.write("</br>");

        contador = contador + 1 ;
    }

    document.write("</br><h2>Fin del programa contador ya NO es menor que 5 </h2>");
    document.write("El último número introducido es " + num);
}