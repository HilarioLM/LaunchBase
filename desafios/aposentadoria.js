const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

const mediaAposentadoria = idade + contribuicao

if ((contribuicao === 35 && sexo === "F") || (contribuicao === 45 && sexo === "M")) {
    if((mediaAposentadoria === 85 && sexo === "F") && (mediaAposentadoria === 95 && sexo === "M")) {
        console.log(`${nome}, você pode se aposentar!`)
    } else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
    }
} else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
}