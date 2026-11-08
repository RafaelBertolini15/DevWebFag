const produtos = require('../data/produto');

function listar() {
  return produtos;
}

function buscarProdutosId(id){
    return produtos.find(p => p.id === Number(id));
}

function cadastrarProduto(dados){
    const novoProduto = {
        id: produtos.length > 0 ?
        Math.max(...produtos.map(p => p.id)) + 1 : 1,
        nome: dados.nome.trim(),
        preco: dados.preco
    };
    produtos.push(novoProduto);
    return novoProduto;
}

function atualizarProduto(id, dados){
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return null;
    }
    
    produto.nome = dados.nome.trim();
    produto.preco = dados.preco;
    return produto;
}

function excluirProduto(id) {
    const indice = produtos.findIndex(p => p.id === id);

    if (indice === -1) {
        return null;
    }

    return produtos.splice(indice, 1)[0];
}

module.exports = {
    listar,
    buscarProdutosId,
    cadastrarProduto,
    atualizarProduto,
    excluirProduto
};