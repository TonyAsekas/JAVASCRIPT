const hacerDeberes = true
const hacerLaCama = false

//IF

if(hacerDeberes || hacerLaCama){
    console.log("Puedes jugar")
}else{
    console.log("No puedes jugar")
}

const edad = 19
if(edad >= 1 && edad <18){
    console.log("Eres menos de edad")
}else if(edad >= 18 && edad <=32){
    console.log("Eres adolescente")
}else if( edad > 32 && edad <110){
    console.log("Eres adulto")
} else{
    console.log("Me estas mintiendo")
}

//SWITCH

const curso = "DAM"

switch(curso){
    case "DAM":
        console.log("Estudiamos desarrollo de aplicaciones multiplataforma")
        break;
    case "DAW":
        console.log("Estrudiamos desarrollo de aplicaciones web")
        break;
    case "ASIR":
         console.log("Estrudiamos administracion de sistemas informaticos en red")
        break;
    case "SMR":
         console.log("Estrudiamos sistemas microinformaticos y redes")
        break;
    default:
        console.log("No existe ese curso")
        break;
}


//TERNARIOS

hacerDeberes && hacerLaCama
    ? console.log("puedes jugar")
    : console.log("NO puedes jugar")