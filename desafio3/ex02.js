const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];

  function checaSeUsuarioUsaCSS(tec) {
    for(let i = 0; i < tec.length; i++){
        if(tec[i] === "CSS") {
            return true;
        }
    }
    return false
  }

  for(let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuario[i]);

    if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuario[i].nome} trabalha com CSS`);
    }
  }