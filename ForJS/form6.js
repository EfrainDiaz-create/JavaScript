function calcula()
{
    let numero = document.fdatos.entrada.value;
    let dato = document.getElementById("lista");
    let valor = dato.options[ListeningStateChangedEvent.selectedIndex].value; // .text

    let resultado = numero * valor;
    document.getElementById("salida").innerHTML = resultado;
}