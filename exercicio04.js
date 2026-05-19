const fs = require("fs") // FL = FILE SYSTEM

try {       
    const dados = fs.readFileSync("dados.json", "utf-8");   // Leitura arquivo sincrona

    const json = JSON.parse(dados); // Faz a conversao da estrutura.

    console.log(json);
    
} catch (erro) {
    console.log("Erro: ", erro.message)
}