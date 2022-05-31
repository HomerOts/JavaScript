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


console.log("Consulte por otros viajes")


let cotizar = document.getElementById("cotizar")


ingreseNombre.addEventListener('input', (event) => {
    console.log("Bienvenido/a " + ingreseNombre.value)
})

let ingreseKm = document.getElementById("kilometraje")

ingreseKm.addEventListener('input', () => {

    console.log("Usted desea cotizar un viaje de " + ingreseKm.value + "kilometros")
})

cotizar.addEventListener('click', () => {

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Gracias por confiar en Envío veloz',
        showConfirmButton: false,
        timer: 3000
      })
    let resultado = parseFloat(distancia.value * km)
    console.log("El valor de su viaje es de $" + resultado)

})


//Local Storage


let arrayViajeros = [{
    nombre: "Gastón"
}, {
    nombre: "Carlos"
}, {
    nombre: "Gonzalo"
}, {
    nombre: "Irene"
}]

let viajerosJson = JSON.stringify(arrayViajeros)
console.log(viajerosJson)


localStorage.setItem("viajeros", viajerosJson)

let viajerosParseados = JSON.parse(localStorage.getItem("viajeros"))
console.log(viajerosParseados)



class Viaje {
    constructor(nombre, kilometraje, vuelta, id) {
        this.nombre = nombre;
        this.kilometraje = kilometraje;
        this.vuelta = vuelta;
        this.id = id;
    }

    mostrarNombre() {
        console.log(this.nombre)
    }
}

const viaje1 = new Viaje("Gastón", 25, "si", 1)
const viaje2 = new Viaje("Carlos", 32, "si", 2)
const viaje3 = new Viaje("Gonzalo", 8, "no", 3)
const viaje4 = new Viaje("Irene", 18, "no", 4)

let viajes = [viaje1, viaje2, viaje3, viaje4]




let comentarios = []


let divViajes = document.getElementById("viajeros")
fetch('viajeros.json')
.then(response => response.json ())
.then(viajeros => {
        viajeros.forEach((viajero)=> {
            let {id,nombre,kilometraje,vuelta} = viajero
            divViajes.innerHTML += `
    <div class="contenedorviajeros">
        <div class="otrosViajes" id="viaje${id}">
                <p> Nombre:${nombre} </p>
                <p> Kilometraje${kilometraje} </p>
                <p> ¿Dicho viaje requirió vuelta?:${vuelta} </p>
                <button id="boton${id}"> Revisar comentarios </button>
        </div>
    </div>
    `
        })

})