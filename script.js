
let numUno= parseInt(prompt("Ingrese un número"));

for (let i=1;i<=100;i++){
    let resultado= numUno * i;
alert(numUno +" X "+ i + " = " + resultado);

if(resultado<=100) {
    continue;
}
else {
    alert("Su multiplicación ha superado el límite establecido");
    break;
}

}

