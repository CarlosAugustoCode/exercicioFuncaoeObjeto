let prompt = require('prompt-sync')()

let nome_recebido = prompt("Digite seu nome: ")
let idade_recebida = parseInt(prompt("Digite sua idade: "))

function olaPessoa(nome_, idade_) {

    let pessoa = {
        nome: nome_,
        idade: idade_,
    }

    console.log("Olá " + pessoa.nome + "! Você está com " + pessoa.idade + " anos")

}

olaPessoa ("Guto", 34)

