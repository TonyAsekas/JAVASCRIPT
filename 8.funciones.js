//DECLARAR
function saludar(){
    console.log("Hola");   
}

//EJECUTAR
saludar()

                          // Parámetro                      
function saludarConNombre(nombre){
    console.log("Hola " +nombre)
}

                 // Argumento
saludarConNombre("Tony")
saludarConNombre("Sara")
saludarConNombre("Pepe")


function calcularEdad(nombre, anoActual, anoNacimiento){
  const edad = anoActual - anoNacimiento
  console.log(nombre + " tiene "+edad+" años")

}
calcularEdad("Antonio", 2026, 1996)

function mostrarDatosUser(usuario){
    console.log(
        usuario.nombre +
        " tiene "+
        usuario.edad +
        " años "+
        " y vive en "+
        usuario.ciudad +
        ", su DNI es "
        +usuario.dni
    )
}
antonio ={
    nombre: "Antonio",
    edad: 30,
    ciudad: "Oviedo",
    dni: 123456
}

mostrarDatosUser(antonio)


function suma(numA, numB){
    const total = numA + numB
    return total
}

const unoMasDos = suma(1,2)
console.log(unoMasDos)

//ARROW FUNCTIONS

const suma = (numA, numB) => {
    const total = numA + numB
    return total
}

