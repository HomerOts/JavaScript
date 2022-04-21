const vuelta = parseFloat(1.20)
const km = parseInt(40)
let distancia = parseFloat(prompt("Ingrese el kilometraje de su viaje"))
let regreso = prompt("Dicho viaje requiere vuelta?")
let resultado = parseFloat(distancia * km)

function cotizar(distancia, km) {
    return distancia * km
}
    if ((regreso === "si") || (regreso === "Si") || (regreso === "SI")) {
        alert("El valor de su viaje es de $" + (resultado * vuelta))
    } else if ((regreso === "no") || (regreso === "No") || (regreso === "NO")) {
        alert("El valor de su viaje es de $" + (resultado))
    } 
    do{
        cotizar
    }  while (distancia !=" ")


