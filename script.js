const vuelta = parseFloat(1.20)
const km = parseInt(40)
let ingreseNombre = prompt("Ingrese su nombre")
let distancia = parseFloat(prompt("Ingrese el kilometraje de su viaje"))
let regreso = prompt("Dicho viaje requiere vuelta? Responda Si o No")
let resultado = parseFloat(distancia * km)



    console.log(ingreseNombre)
    if ((regreso === "si") || (regreso === "Si") || (regreso === "SI")) {
        alert("El valor de su viaje es de $" + (resultado * vuelta))
        console.log("El valor de su viaje es de $"+resultado * vuelta)
    } else if ((regreso === "no") || (regreso === "No") || (regreso === "NO")) {
        alert("El valor de su viaje es de $" + (resultado))
        console.log(resultado)
    } else if (resultado===isNaN){
        alert("Ingrese un kilometraje válido")
    } else if (resultado ===parseFloat){
        alert(distancia)
    }

    const cotizar=(distancia) => distancia * km


    class Viajes{
        constructor (nombre, kilometraje, vuelta){
            this.nombre= nombre
            this.kilometraje = kilometraje
            this.vuelta = vuelta
        }
    }

const viaje1= new Viajes ("Gastón",25, "si")
const viaje2= new Viajes ("Carlos",32, "si")
const viaje3= new Viajes ("Gonzalo",8, "no")
const viaje4= new Viajes ("Irene",18, "no")

let viajes =[viaje1,viaje2,viaje3,viaje4]
console.log("Consulte por otros viajes")
console.log([viajes])