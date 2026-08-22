const peliculas = [
  {
    titulo: "El Padrino",
    año: 1972,
    duracion: 175,
    nota: 9.2,
    generos: ["Crimen", "Drama"],
  },
  {
    titulo: "Toy Story",
    año: 1995,
    duracion: 81,
    nota: 8.3,
    generos: ["Animación", "Aventura"],
  },
  {
    titulo: "Mad Max: Fury Road",
    año: 2015,
    duracion: 120,
    nota: 8.1,
    generos: ["Acción", "Aventura"],
  },
  {
    titulo: "Parásitos",
    año: 2019,
    duracion: 132,
    nota: 8.5,
    generos: ["Drama", "Thriller"],
  },
  {
    titulo: "Interstellar",
    año: 2014,
    duracion: 169,
    nota: 8.7,
    generos: ["Ciencia ficción", "Drama"],
  },
  {
    titulo: "Shrek",
    año: 2001,
    duracion: 90,
    nota: 7.9,
    generos: ["Animación", "Comedia"],
  },
];

// MAP -> Transformar datos, retornamos un nuevo array de la forma que queramos

//Version normal:
/*const soloTitulos = []
for (const pelicula of peliculas) {
    soloTitulos.push(pelicula.titulo)   
}
console.log(soloTitulos)
*/

//Con MAP:

const soloTitulos = peliculas.map((pelicula) => pelicula.titulo);
console.log(soloTitulos);

const frasesCartelera = peliculas.map(
  (pelicula) => 
    `${pelicula.titulo} del año ${pelicula.año} tiene un ${pelicula.nota} de puntuación, y dura ${pelicula.duracion} minutos`
);
console.log(frasesCartelera);

const peliculasModificadas = peliculas.map((pelicula) => ({
  title: pelicula.titulo,
  year: pelicula.año,
  reviews: pelicula.nota / 2,
}));

console.log(peliculasModificadas);

//FILTER

const peliculasSobresalientes = peliculas.filter((pelicula) => pelicula.nota >=8)
console.log(peliculasSobresalientes)

const peliculasAnimadas = peliculas.filter((pelicula) => pelicula.generos.includes("Animación"))
console.log(peliculasAnimadas)

const peliculasSobresDramas = peliculas.filter(
    (pelicula) => pelicula.generos.includes("Drama") && pelicula.nota > 8.5,)
console.log(peliculasSobresDramas)

//FIND

const shrek = peliculas.find((pelicula) => pelicula.titulo === "Shrek")
console.log(shrek)

//EVERY - SOME

const todasMejoresQueOcho = peliculas.every((pelicula) => pelicula.nota > 8);
const algunasMejoresQueOcho = peliculas.some((pelicula) => pelicula.nota > 8);
console.log(todasMejoresQueOcho);
console.log(algunasMejoresQueOcho);

//REDUCE

const duracionTotalPeliculas = peliculas.reduce((acc, pelicula) => acc + pelicula.nota,
0,)
console.log(duracionTotalPeliculas)

///EXTRRA
/* const peliculasSobresalientes = peliculas.filter(
  (pelicula) => pelicula.nota >= 8,
); */

const  peliculasSobresRed = peliculas.reduce((acc, pelicula) => {
    if(pelicula.nota >= 8){
        acc.push(pelicula)
    }
    return acc;
}, [])
console.log(peliculasSobresRed)