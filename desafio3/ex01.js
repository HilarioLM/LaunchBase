const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];

function verify (usuario) {

for(let i = 0; i < usuario.length; i++){

    console.log(`${usuario[i].nome} trabalha com ${usuario[0].tecnologias} ,${usuario[1].tecnologias} `);
}

}

verify(usuarios);