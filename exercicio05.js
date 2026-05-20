const prompt = require('prompt-sync')()

let saldo = 1000;

const valor = prompt("Digite o valor do saque: ");

try {
    if (isNaN(valor)) {
        throw new Error("Valor inválido.");
    }

    if (Number(valor) <= 0) {
        throw new Error("O valor deve ser positivo.");
    }

    if (Number(valor) > saldo) {
        throw new Error("Saldo insuficiente.");
    }

    saldo -= Number(valor);

    console.log("Saque realizado com sucesso.");
    console.log("Saldo atual: ", saldo);

} catch (erro) {
    console.log("Erro: ", erro.message);
}