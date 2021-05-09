function funcionUno()
{
   let result=""
   let i;
   for (i=1; i<=6; i++)
   {
       result = result + "<h> Titulo </h>" + i ;
   } 
   document.getElementById("central").innerHTML=result;
}