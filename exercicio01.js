const prompt = require('prompt-sync')()

let num1 = Number(prompt("Digite um valor: "));
let num2 = Number(prompt("Digite o outro valor: "));

try {
    if(num2 === 0){
        throw new Error("Não é possível dividir por ZERO!")
    }

    let resultado = num1 / num2;
    console.log("Resultado ", resultado);
    
} catch (erro) {
    console.log("Erro: ", erro.message);
}