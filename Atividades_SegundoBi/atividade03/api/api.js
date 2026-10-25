
const express = require('express');
const cors = require('cors');

const api = express();
const PORTA = 1515;

api.use(cors());
api.use(express.json());

const produtos = [
  { id: 1, nome: 'Teclado', preco: 120 },
  { id: 2, nome: 'Mouse', preco: 65.90 },
  { id: 3, nome: 'Monitor', preco: 899.90 }
];

api.get('/atv/produtos', (req, res) => {
  res.status(200).json(produtos);
});

api.post('/atv/produtos', (req, res) => {
  const { nome, preco } = req.body;

  if (typeof nome !== 'string' || !nome.trim() ||
      typeof preco !== 'number' || !Number.isFinite(preco) || preco <= 0) {
    return res.status(400).json({ mensagem: 'Nome e preço inválidos.' });
  }

  const id = produtos.length
    ? Math.max(...produtos.map(p => p.id)) + 1
    : 1;

  const produto = { id, nome: nome.trim(), preco };
  produtos.push(produto);

  res.status(201).json(produto);
});

api.get('/atv/produtos/:id', (req, res) => {
  const produto = produtos.find(p => p.id === Number(req.params.id));

  if (!produto) {
    return res.status(404).json({ mensagem: 'Produto não encontrado.' });
  }

  res.status(200).json(produto);
});

api.put('/atv/produtos/:id', (req, res) => {
  const produto = produtos.find(p => p.id === Number(req.params.id));
  const { nome, preco } = req.body;

  if (!produto) {
    return res.status(404).json({ mensagem: 'Produto não encontrado.' });
  }

  if (typeof nome !== 'string' || !nome.trim() ||
      typeof preco !== 'number' || !Number.isFinite(preco) || preco <= 0) {
    return res.status(400).json({ mensagem: 'Nome e preço inválidos.' });
  }

  produto.nome = nome.trim();
  produto.preco = preco;

  res.status(200).json(produto);
});

api.delete('/atv/produtos/:id', (req, res) => {
  const indice = produtos.findIndex(p => p.id === Number(req.params.id));

  if (indice === -1) {
    return res.status(404).json({ mensagem: 'Produto não encontrado.' });
  }

  produtos.splice(indice, 1);

  res.status(200).json({ mensagem: 'Produto excluído com sucesso.' });
});

api.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});
