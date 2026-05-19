const prompt = require('prompt-sync')()

let nome = prompt("Digite seu Nome: ");
let email = prompt("Digite seu e-mail: ");
let senha = prompt("Digite a senha: ");

try {
    if(nome.trim() === ""){            // TRIM remove os espaços das extremidades.
        throw new Error("Nome inválido.")
    }

    if(!email.includes("@")){              
        throw new Error("E-mail inválido")
    }

    if(senha.length < 6){
        throw new Error("A senha deve conter no mínimo 6 caracteres.")
    }

    console.log("Cadastro realizado com sucesso!")
    
} catch (erro) {
    console.log("Erro ", erro.message)
}