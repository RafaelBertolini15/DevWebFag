const produtoService = require('../services/produtoService');

function listar(req, res) {
    const produtos = produtoService.listar();
    res.status(200).json(produtos);
}

function buscarPorId(req, res) {
    const id = Number(req.params.id);

    if(!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            mensagem: 'ID inválido.' 
        });
    }

    const produto = produtoService.buscarProdutosId(id);

    if (!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado.'
        });
    }

    res.status(200).json(produto);
}

function cadastrar(req, res) {
    try {
        const novoProduto = produtoService.cadastrarProduto(req.body);
        res.status(201).json(novoProduto);
    } catch (error) {
        if (error.statusCode !== 400) {
            throw error;
        }

        return res.status(400).json({ mensagem: error.message });
    }
}

function atualizar(req, res) {
    const id = Number(req.params.id);

    if(!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            mensagem: 'ID inválido.' 
        });
    }

    let produto;

    try {
        produto = produtoService.atualizarProduto(id, req.body);
    } catch (error) {
        if (error.statusCode !== 400) {
            throw error;
        }

        return res.status(400).json({ mensagem: error.message });
    }

    if(!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado.'
        });
    }

    res.status(200).json(produto);
}

function excluir(req, res) {
    const id = Number(req.params.id);

    if(!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            mensagem: 'ID inválido.' 
        });
    }

    const produto = produtoService.excluirProduto(id);

    if(!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado.'
        });
    }

    res.status(200).json({
        mensagem: 'Produto excluído com sucesso.',
        produto
    });
}

module.exports = {
    listar,
    buscarPorId,
    cadastrar,
    atualizar,
    excluir
}