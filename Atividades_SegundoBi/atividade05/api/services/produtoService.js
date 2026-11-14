const produtoRepository = require("../data/repository");

function validarDados(dados) {
  if (!dados || typeof dados.nome !== "string" || dados.nome.trim() === "") {
    const error = new Error("O nome do produto não pode ficar vazio.");
    error.statusCode = 400;
    throw error;
  }

  if (typeof dados.preco !== "number" || !Number.isFinite(dados.preco)) {
    const error = new Error("O preço deve ser um número válido.");
    error.statusCode = 400;
    throw error;
  }

  if (dados.preco < 0) {
    const error = new Error("O preço não pode ser negativo.");
    error.statusCode = 400;
    throw error;
  }

  return { nome: dados.nome.trim(), preco: dados.preco };
}

function listar() {
  return produtoRepository.findAll();
}

function buscarProdutosId(id) {
  return produtoRepository.findById(id);
}

function cadastrarProduto(dados) {
  return produtoRepository.create(validarDados(dados));
}

function atualizarProduto(id, dados) {
  const produtoValido = validarDados(dados);

  if (!produtoRepository.update(id, produtoValido)) {
    return null;
  }

  return produtoRepository.findById(id);
}

function excluirProduto(id) {
  const produto = produtoRepository.findById(id);

  if (!produto) {
    return null;
  }

  produtoRepository.deleteById(id);
  return produto;
}

module.exports = {
  listar,
  buscarProdutosId,
  cadastrarProduto,
  atualizarProduto,
  excluirProduto,
};