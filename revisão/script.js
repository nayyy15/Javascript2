// SCRIPT.JS

// variáveis
let nome = "Juliana"
let idade = 24
let valor = prompt("Digite um valor:")

// concatenação
console.log("Meu nome é", nome, "e tenho", idade, "anos")
console.log(valor)

// operadores aritméticos
let num1 = 3
let num2 = 2

let soma = num1 + num2
let subtracao = num1 - num2
let multiplicacao = num1 * num2
let divisao = num1 / num2
let resto = num1 % num2

console.log(soma)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)
console.log(resto)

// operadores relacionais
let valor1 = 10
let valor2 = 5

console.log(valor1 > valor2)
console.log(valor1 >= valor2)
console.log(valor1 < valor2)
console.log(valor1 <= valor2)
console.log(valor1 == valor2)
console.log(valor1 != valor2)

// estrutura condicional
let idade1 = 18
if (idade1 >= 18) {
    console.log("voce é maior de idade")
} else {
    console.log("voce é menor de idade")
}
let numero = Number(prompt("Digite um número:"))
if (numero > 0) {
    console.log("é maior que 0")
} else if (numero < 0) {
    console.log("é menor que 0")
} else {
    console.log("o número é 0")
}

// operadores lógicos
let alunoSesi = true
let ensinoMedio = true
if (alunoSesi && ensinoMedio) {
    console.log("pode fazer o técnico")
} else {
    console.log("não pode fazer o técnico")
}
let numero1 = Number(prompt("informe um número"))
if (numero1 >= 10 && numero1 <= 20) {
    console.log("Está entre 10 e 20")
} // tudo tem que ser verdade
let numero2 = Number(prompt("informe um número"))
if (numero2 == 10 || numero2 == 20) {
    console.log("O número é 10 ou 20")
}
// um tem que ser verdade

// switch case
let opcao = 2
switch (opcao) {
    case 1:
        console.log("Voce escolheu a opção 1")
        break
    case 2:
        console.log("Voce escolheu a opção 2")
        break
    default:
        console.log("Opção invalida")
}
let letra = "a"
switch (letra) {
    case "a":
        console.log("vogal")
        break
    case "b":
        console.log("consoante")
        break
    default:
        console.log("não é uma letra")
}

// laço de repetição - while
let numero3 = 1
while (numero3 <= 10) {
    console.log(numero3)
    numero3 += 1
}
let numero4 = 10
while (numero4 >= 1) {
    console.log(numero4)
    numero4 -= 1
}
let resposta = "nao"
while (resposta == "nao") {
    resposta = prompt("deseja sair?")
}

// laço de repetição - do...while
let contador = 0
do {
    console.log(contador)
    contador += 1
} while (contador <= 10)

// laço de repetição - for
for (let contador1 = 0; contador1 <= 10; contador1 += 1) {
    console.log(contador1)
}
// array
let frutas = ["maça", "banana", "laranja"]
console.log(frutas.length) // tamanho do array
frutas.push("uva") // adiciona no final
frutas.pop() // remove o último
frutas.shift() // remove o primeiro
frutas.unshift("manga") // adiciona no início
for (let i = 0; i < frutas.length; i += 1) {
    console.log(frutas[i])
} // Mostrar o array