const botaoCarregar = document.getElementById('carregarProdutos');
const listaProdutos = document.getElementById('produtos');
const mensagem = document.getElementById('mensagem');

botaoCarregar.addEventListener('click', carregarProdutos);

async function carregarProdutos() {
    listaProdutos.replaceChildren();
    mensagem.classList.remove('erro');
    mensagem.textContent = 'Carregando produtos...';
    botaoCarregar.disabled = true;

try {
    const response = await fetch("https://dummyjson.com/products?limit=12");

    if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`);
    }

const dados = await response.json();

if (!Array.isArray(dados.products) ||
dados.products.length === 0) {
    mensagem.textContent = 'Nenhum produto encontrado.';
    return;
}

dados.products.forEach(produto => {
    const card = document.createElement('article');
    card.classList.add('card');

    const imagem = document.createElement('img');
    imagem.src = produto.thumbnail;
    imagem.alt = produto.title;
    imagem.loading = 'lazy';

    const conteudo = document.createElement('div');
    conteudo.classList.add('card-conteudo');

    const nome = document.createElement('h2');
    nome.textContent = produto.title;

    const preco = document.createElement('p');
    preco.classList.add('preco');
    preco.textContent = produto.price.toLocaleString('pt-BR',
         { style: 'currency',
             currency: 'BRL' });
    
    const categoria = document.createElement('span');
    categoria.classList.add('categoria');
    categoria.textContent = produto.category;

    conteudo.append(nome, preco, categoria);
    card.append(imagem, conteudo);
    listaProdutos.appendChild(card);
});

mensagem.textContent = 
 `${dados.products.length} produtos carregados com sucesso!`;

} catch (error) {
    console.error("Erro ao carregar produtos:", error);

    mensagem.textContent = 'Ocorreu um erro ao carregar os produtos. Por favor, tente novamente mais tarde.';
    mensagem.classList.add('erro');

} finally {
    botaoCarregar.disabled = false;
}
}
