//Função declarativa
function saudacao(){
console.log("Olá")
}

saudacao()//chamando a função

//Função com parâmetro
let nome = prompt("Digite seu nome:")
function saudar(nome){
    return "Olá, " + nome + "!"
}
console.log(saudar(nome))

//Função Anônima
let mostrarMensagem = function(){
    console.log("Hoje está frio!")
}

mostrarMensagem()

//Arrow Function
let n1 = Number(prompt("Digite um número:"))
let n2 = Number(prompt("Digite outro número:"))
const multiplicacao = (n1, n2) => {
    return n1 * n2
}
console.log(multiplicacao(n1, n2))

// 1 - Trocando Textos
document.getElementById('btnTrocarTexto').onclick = function() {
    document.getElementById('paragrafo').textContent = "Texto alterado com JS!";
};

// 2 - Personalizando a Página
document.getElementById('btnCorFundo').onclick = function() {
    document.body.style.backgroundColor = "blue";
};

// 3 - Adicionando Elementos
document.getElementById('btnAdicionarItem').onclick = function() {
    const novoItem = document.createElement('li');
    novoItem.textContent = "Novo Item";
    document.getElementById('lista').appendChild(novoItem);
};

// 4 - Removendo Paragrafo
document.getElementById('btnRemoverParagrafo').onclick = function() {
    const p = document.getElementById('paragrafo');
    if (p) p.remove();
};

// 5 - Personalização
document.getElementById('btnPersonalizar').onclick = function() {
    const p = document.getElementById('paragrafo');
    const h1 = document.getElementById('titulo');
    if (p) {
        p.style.color = "blue";
        p.style.fontSize = "20px";
    }
    if (h1) {
        h1.style.color = "green";
        h1.style.fontSize = "35px";
    }
};

// 1 - Digitação
document.getElementById('campoTexto').addEventListener('input', function(e) {
    document.getElementById('textoDigitado').textContent = e.target.value;
});

// 2 - Troca de texto
document.getElementById('btnMouseOver').addEventListener('mouseover', function() {
    this.textContent = "Você passou o mouse!";
});
document.getElementById('btnMouseOver').addEventListener('mouseout', function() {
    this.textContent = "Passe o mouse aqui";
});

// 3 - Escondendo elementos
document.getElementById('btnEsconder').addEventListener('dblclick', function() {
    document.getElementById('elementoEscondivel').style.display = "none";
});

// 4 - Alterando a fonte
document.getElementById('btnFonteAleatoria').onclick = function() {
    const tamanho = Math.floor(Math.random() * (40 - 10 + 1)) + 10;
    document.getElementById('textoFonte').style.fontSize = tamanho + "px";
};

