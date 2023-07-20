// let prompt = require('prompt-sync')()

// let nome_recebido = prompt("Digite seu nome: ")
// let idade_recebida = parseInt(prompt("Digite sua idade: "))


// olaPessoa(nome_recebido, idade_recebida)

import { exercicio1 } from "./moduloExercicio1.js" // chamando a função que foi criada no moduloExercicio1.js para rodar neste arquivo.

import PromptSync from "prompt-sync"
let prompt = PromptSync();

let resposta //prompt("Digite o numero do exercicio que você quer exibir, se quiser sair, digite sair")

exercicio1()

function olaPessoa(nome_, idade_) {

    let pessoa = {
        nome: nome_,
        idade: idade_,
    }

    console.log("Olá " + pessoa.nome + "! Você está com " + pessoa.idade + " anos")

}
