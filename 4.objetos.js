const batman = {
    nombre: "Batman",
    nombreReal: "Bruce Wayne",
    ciudad: "Gotham",
    amigos: ["Dick Grayson","Tim Drake","Jason Todd","Alfred","Barbara Gordon"],
    padres: false
}

//LEER Y ACCEDER A UN OBJECT

console.log(batman.ciudad)
console.log(batman["ciudad"])
console.log(batman.amigos[0])

//MODIFICAR UN OBJECT

batman.ciudad = "Oviedo"
console.log(batman)
batman.amigos = 5
console.log(batman)

//CREAR PROPIEDADES

batman.coche = "Batmovil"
console.log(batman)

// BORRAR PROPIEDADES

delete batman.coche
console.log(batman)