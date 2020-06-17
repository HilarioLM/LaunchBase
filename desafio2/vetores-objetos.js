const programador = {
    nome: '',
    idade: 18,
    propriedades: [
        {
            nome: 'C++', 
            especialidade: 'Desktop'
        },
        { 
            nome: 'Python', 
            especialidade: 'Data Science' 
        },
        { 
            nome: 'JavaScript', 
            especialidade: 'Web/Mobile' 
        }
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} e usa a técnologia ${programador.propriedades[0].nome} com especialiade em ${programador.propriedades[0].especialidade}`)