function alterarCor(){
    const primeiroConteudo = document.querySelector('.content');

    primeiroConteudo.classList.toggle("ativo");
}

// const listaConteudo = document.querySelectorAll('.content');

// console.log(listaConteudo)

// listaConteudo.forEach(item => {
//     item.firstElementChild.textContent = "Alterando via forEach";
// });

function criarParagrafo(){
const primeiraDiv = document.querySelector('.content');

const paragrafo = document.createElement('p');

paragrafo.textContent = "Adicionando via JS";

primeiraDiv.appendChild(paragrafo);
}

function cadastrar(evento){

    evento.preventDefault();

    const form = evento.target;

    const nomeProduto = form[0].value;
    const quantidade = form[1].value;
    const li = document.createElement("li");

    const msg = "Produto: " + nomeProduto + " - Quantidade:" + quantidade;
    li.innerText = msg;

    const ul = document.querySelector(".lista");
    ul.appendChild(li);
}