// CONST y LET -> VARIABLES
const dogName = "Byron" // declarar y asignar a la vez

let movie = "Batman"
console.log(movie)
// Reasignar el valor de una variable. let
movie = "Superman"
console.log(movie)

//Ambito de Bloque -> SCOPE

//Ambito global
const x = 10


if(true){
    //Ambito de bloque
    const y = 5
    //Puedo leer la X porque está a nivel global
    console.log(x)
    //Puedo leer la Y porque esta aen el mismo bloque
    console.log(y)

}

//Puedo leer la X porque esta a nivel global
console.log(x)
//No puedo leer la Y porque esta dentro de un bloque
console.log(y)

