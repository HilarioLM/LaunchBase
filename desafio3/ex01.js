const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];


  for(let i = 0; i < usuarios.length; i++){
    //join() funciona como um separador de string
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias.join(', ')}`);
  }

