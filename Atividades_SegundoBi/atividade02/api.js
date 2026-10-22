const exp = require('express');
const cors = require('cors');
const api = exp();
const PORTA =1515;

api.use(cors());
api.use(exp.json());

const produtos = [
    { id: 1, nome: "Teclado", preco: 120.00 },
    { id: 2, nome: "Mouse", preco: 65.90 },
    { id: 3, nome: "Monitor", preco: 899.90 }
];

api.get('/atv/produtos', (req, res) => {
    res.status(200).json(produtos);
});

api.post('/atv/produtos', (req, res) => {
    const produtoNovo = req.body;
    produtos.push(produtoNovo);
    res.status(201).json(produtoNovo);
});

api.get('/atv/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const produto = produtos.find(i => i.id === id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "O id informado na busca do produto não foi encontrado." 
        });
    };

    res.status(200).json(produto);
});

api.put('/atv/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const produto = produtos.find(i => i.id === id);

    if (!produto) {
        return res.status(404).json({
            mensagem: "O id não foi encontrado para realização do update." 
        });
    }

    const { nome, preco } = req.body;

    if (
        typeof nome !== 'string' ||
        !nome.trim() ||
        typeof preco !== 'number' ||
        !Number.isFinite(preco) ||
        preco <= 0
    ) {
        return res.status(400).json({
            mensagem: "Verifique os parametros novamente, pois não foram informados corretamente para a atualização do produto."
        });
    };

    produto.nome = nome;
    produto.preco = preco;
    res.status(200).json(produto);
});

api.delete('/atv/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = produtos.findIndex(i => i.id === id);

    if (index === -1) {
        return res.status(404).json({
            mensagem: "O id informado para exclusão do produto não foi encontrado." 
        });
    }

    produtos.splice(index, 1);
    res.status(200).json({
        mensagem: "Produto excluído com sucesso."
    });
});

api.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});