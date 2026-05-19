const prompt = require('prompt-sync')()

let idade = prompt("Digite sua idade: ");

try {
    if(isNaN(idade)){
        throw new Error("A idade deve ser numerica.")
    }

    if(Number(idade) < 0){
        throw new Error("A idade não pode ser negativa.")
    }
    console.log("Idade válida ", idade, " anos.");

} catch (erro) {
    console.log("Erro: ", erro.message)
}