let ciudad, destino, descuento =0;

ciudad =prompt("Ciudad?", "");
destino =prompt("Destino?", "");

if (ciudad=="Palma"){
    if (destino =="Barcelona")
    {
        descuento = 5;
    }
    else
    {
        if (destino =="Madrid")
        {
            descuento = 10;
        }
             
        else (destino =="Valecia")
        {
            descuento = 15;
        }
    }
} 
    document.write("<h3>Su descuento es </h3> "+ descuento);