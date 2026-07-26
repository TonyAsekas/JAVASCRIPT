const numeros = [1,2,3,4,5,6]

const numerosPorDos= [];


for(let i = 0; i < numeros.length; i++){
const numero = numeros[i]
console.log(numero)
numerosPorDos.push(numero*2)
}

console.log(numerosPorDos)

//FOR OF
 
const numerosPorDosFor =[]

for(const numero of numeros){
    numerosPorDos.push(numero*2)
}

console.log(numerosPorDosFor)

//FOR EACH

const numerosPorDosForEach =[]

numeros.forEach((numero)=>{numerosPorDosForEach.push(numero*2)})

console.log(numerosPorDosForEach)

//FOR IN

const batman= {
    name: "Batman",
    city: "Gotham",
    age: 56
}

batman.name


for (const key in batman) {
    console.log("La clave: "+key+" tiene el valor: "+batman[key])
}

/////////////////////////////////

let x = 1;

while(x<3){
    console.log("El valor de i es: "+x)
    x++
}

///////////

let z = 5
do{
    console.log("El valor de z es "+z)
    z++
}while(z<=3)
