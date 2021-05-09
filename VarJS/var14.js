{
    var contador;
    contador=1;
    while (contador<8)
    {
        let dato=prompt("Introduce números:", " ");
        var num=parseInt(dato); 
        document.write("El número introducido es " + num);
        document.write("</br>");
        
        contador = contador + 1 ;
    }
}