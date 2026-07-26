const animales = ["Perro","Gato","Rinoceronte","Murciélago","Elefante"]


//CALCULAMOS LONGITUD DE UN ARRAY --> HUMANA

const longitud = animales.length
console.log(longitud)

console.log(animales.length) // GO THE HELL

console.log(animales[0])

console.log(animales[animales.length - 1])
animales[2] = "Cuervo"
console.log(animales)

//METODOS DE ARRAYS

const peliculas = [
    "Jurassic Park", //0
    "El Retorno del Jedi",//1
     "The Thing",//2
     "The Evil Dead",//3
     "El Castillo Ambulante"//4
    ]

    //PUSH -> Añadir elementos al final del array

    peliculas.push("El Viaje de Chihiro","El Ejercito de las Tinieblas")
    console.log(peliculas)

    //POP -> Elimina el ultimo elemnto del array

    peliculas.pop()
    console.log(peliculas)

    //UNSHIFT -> Añade elementos al primer puesto del array

    peliculas.unshift("Dracula")
    console.log(peliculas)

    //SHIFT -> Elimina el primer elemento del array

    peliculas.shift()
    console.log(peliculas)

    //REVERSE -> Invierte el ordcen del array

    peliculas.reverse()
    console.log(peliculas)

    //SORT -> Ordena alfabeticamente los arrays

    peliculas.sort()
    console.log(peliculas)

    const numeros = [2,3,4,10,9,15,1,22,27,20,12]
    numeros.sort((a, b) => a - b)
    console.log(numeros)

    //IndexOF -> Encuentra la posicion de un elemento

    console.log(peliculas.indexOf("The Thing"))
    console.log(peliculas)

    //SLICE -> Sirve para consultar una porcion de un Array

    console.log(peliculas.slice(2, 4))

    console.log(peliculas)
    const posicionJurassicPark = peliculas.indexOf("Jurassic Park")
    peliculas.slice(posicionJurassicPark, 1)
    console.log(peliculas)
    