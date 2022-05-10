const vuelta = parseFloat(1.20)
const km = parseInt(40)
let ingreseNombre = document.getElementById("nombre")
let distancia = document.getElementById("kilometraje")
let regreso = document.getElementById("vuelta")

/* Comento primeras entregas
do{
    console.log(ingreseNombre)
    console.log(distancia)
    console.log(regreso)
    if ((regreso === "si") || (regreso === "Si") || (regreso === "SI")) {
        alert("El valor de su viaje es de $" + (resultado * vuelta))
        console.log("El valor de su viaje es de $"+resultado * vuelta)
    } else if ((regreso === "no") || (regreso === "No") || (regreso === "NO")) {
        alert("El valor de su viaje es de $" + (resultado))
    } else if (resultado === parseFloat){
        console.log("Consulte por disponibilidad de vehículos")
    }
   break;
} while(ingreseNombre!= " ")
console.log(ingreseNombre+", muchas gracias por utilizar Envío Veloz")
*/
 

//Constructor + array
    class Viaje {
        constructor (nombre, kilometraje, vuelta){
            this.nombre= nombre
            this.kilometraje = kilometraje
            this.vuelta = vuelta   
        }
    }

const viaje1= new Viaje ("Gastón",25, "si")
const viaje2= new Viaje ("Carlos",32, "si")
const viaje3= new Viaje ("Gonzalo",8, "no")
const viaje4= new Viaje ("Irene",18, "no")

let viajes =[viaje1,viaje2,viaje3,viaje4]
//Fin constructor + array

console.log("Consulte por otros viajes")

for(let viaje of viajes) {
   for(let propiedad in viajes) 
   console.log(viajes[propiedad])    
   break;
}
    
let cotizar = document.getElementById("cotizar")


ingreseNombre.addEventListener('input',(event)=> {
    console.log("Bienvenido/a "+ ingreseNombre.value)
})

let ingreseKm = document.getElementById("kilometraje")

ingreseKm.addEventListener('input',()=> {

        console.log("Usted desea cotizar un viaje de " + ingreseKm.value + "kilometros" )
})

cotizar.addEventListener('click', () => {
    let resultado = parseFloat(distancia.value * km)
    
    console.log("El valor de su viaje es de $"+resultado)
    
})



