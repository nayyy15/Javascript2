// SCRIPT.JS

// Operadores Aritméticos
// 1 - Área de um Retângulo
let largura = 5
let altura = 10
let area = largura * altura
console.log("Área:", area)

// 2 - Dobro e Metade
let numero = 20
console.log("Dobro:", numero * 2)
console.log("Metade:", numero / 2)

// 3 - Média Aritmética
let n1 = 8, n2 = 6, n3 = 7
let media = (n1 + n2 + n3) / 3
console.log("Média:", media)

// 4 - Conversão de Temperatura
let celsius = 30
let fahrenheit = (celsius * 9/5) + 32
console.log("Temperatura em Fahrenheit:", fahrenheit)

// Operadores Relacionais
// 1 - Comparando dois números
let a = 15, b = 10
console.log(a > b)
console.log(a <= b)
console.log(a == b)

// 2 - Maioridade
let idade = 65
console.log("Maior de idade:", idade >= 18)
console.log("Idoso:", idade >= 60)

// Estrutura Condicional - if else
// 1 - Verificação de Maioridade
function verificarIdade(idade) {
  if (idade >= 18) console.log("Você é maior de idade")
  else console.log("Você é menor de idade")
}

// 2 - Verificação de Aprovado
function verificarNota(nota) {
  if (nota >= 7) console.log("Aprovado")
  else console.log("Reprovado")
}

// 3 - Verificar Temperatura
function verificarTemperatura(temp) {
  if (temp > 30) console.log("Está quente")
  else console.log("Está frio")
}

// 4 - Classificação de Idade
function classificarIdade(idade) {
  if (idade < 12) console.log("Criança")
  else if (idade < 17) console.log("Adolescente")
  else if (idade < 59) console.log("Adulto")
  else console.log("Idoso")
}

// 5 - Sistema de Notas Escolares
function notaLetra(nota) {
  if (nota > 90) console.log("A")
  else if (nota > 80) console.log("B")
  else if (nota > 70) console.log("C")
  else if (nota > 60) console.log("D")
  else console.log("F")
}

// 6 - Classificação de Pistas
function classificarPista(distancia) {
  if (distancia < 400) console.log("Pista curta")
  else if (distancia < 800) console.log("Pista média")
  else if (distancia < 1500) console.log("Pista longa")
  else console.log("Pista muito longa")
}

// 7 - Pontuação de Jogo
function classificarJogador(pontos) {
  if (pontos < 1000) console.log("Iniciante")
  else if (pontos < 5000) console.log("Intermediário")
  else if (pontos < 10000) console.log("Avançado")
  else console.log("Mestre")
}

// Operadores Lógicos
// 1 - Promoção
function verificarPromocao(anos, projetos) {
  if (anos >= 5 || projetos > 10) console.log("Você está elegível para promoção")
  else console.log("Você não está elegível")
}

// 2 - Evento
function podeEntrar(idade) {
  if (idade >= 18 && idade <= 30) console.log("Pode entrar")
  else console.log("Não pode entrar")
}

// 3 - Login
function verificarLogin(usuario, senha) {
  if (usuario === "admin" && senha === "1234") console.log("Login bem-sucedido")
  else console.log("Usuário ou senha incorretos")
}

// 4 - Intervalos
function verificarIntervalo(n) {
  if (n >= 10 && n <= 20) console.log("Entre 10 e 20")
  else if (n >= 30 && n <= 50) console.log("Entre 30 e 50")
  else console.log("Fora dos intervalos")
}

// Switch Case
// 1 - Dias da Semana
let dia = 3
switch (dia) {
  case 1: console.log("Domingo"); break
  case 2: console.log("Segunda-feira"); break
  case 3: console.log("Terça-feira"); break
  case 4: console.log("Quarta-feira"); break
  case 5: console.log("Quinta-feira"); break
  case 6: console.log("Sexta-feira"); break
  case 7: console.log("Sábado"); break
  default: console.log("Número inválido")
}

// 2 - Classificação Idade
let idadeEsportiva = 15
switch (idadeEsportiva) {
  case 5: console.log("Infantil A"); break
  case 10: console.log("Infantil B"); break
  case 15: console.log("Juvenil A"); break
  case 20: console.log("Juvenil B"); break
  case 30: console.log("Adulto"); break
  default: console.log("Idade inválida")
}

// 3 - Turno de Trabalho
let turno = "V"
switch (turno) {
  case "M": console.log("Bom dia!"); break
  case "V": console.log("Boa tarde!"); break
  case "N": console.log("Boa noite!"); break
  default: console.log("Turno inválido")
}

// 4 - Estações do Ano
let estacao = 4
switch(estacao) {
  case 1: console.log("Primavera"); break
  case 2: console.log("Verão"); break
  case 3: console.log("Outono"); break
  case 4: console.log("Inverno"); break
  default: console.log("Estação inválida")
}

// While
let i = 1
while(i <= 10) {
  console.log(i)
  i++
}

let j = 10
while(j >= 1) {
  console.log(j)
  j--
}

let senha = ""
while(senha !== "12345") {
  senha = prompt("Digite a senha: ")
}

let k = 0
while(k <= 100) {
  console.log(k)
  k += 5
}

let cont = 0
while(cont < 5) {
  console.log("Eu gosto de JavaScript")
  cont++
}

// Do...While
let dw = 1
do {
  console.log(dw)
  dw++
} while(dw <= 20)

let continuar
do {
  continuar = prompt("Deseja continuar? (s/n)")
} while (continuar === "s")

let limite = Number(prompt("Digite um número: "))
let l = 1
do {
  console.log(l)
  l++
} while (l <= limite)

let par = 1
do {
  console.log(par)
  par += 2
} while (par <= 31)

// For
for (let f = 1; f <= 30; f++) {
  console.log(f)
}

for (let f = 30; f >= 1; f--) {
  console.log(f)
}

let inicio = 10
let fim = 20
for (let f = inicio; f <= fim; f++) {
  console.log(f)
}

for (let f = 50; f >= 30; f--) {
  console.log(f)
}

for (let f = 1; f <= 50; f += 2) {
  console.log(f)
}

// Array
let filmes = ["Crepusculo", "Gato de botas", "As branquelas"]
console.log(filmes[0])

let frutas = ["maçã", "banana", "laranja", "uva", "maracujá"]
console.log(frutas[2])

let cores = ["roxo", "amarelo", "preto"]
cores.push("branco")
for (let i = 0; i < cores.length; i++) {
  console.log(cores[i])
}

let numeros = [1, 2, 3, 4]
numeros.pop()
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i])
}

let cidades = ["Poá", "Suzano"]
cidades.unshift("Mogi")
for (let i = 0; i < cidades.length; i++) {
  console.log(cidades[i])
}