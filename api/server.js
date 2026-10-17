const express = require('express');
const app = express();

const PORTA = 3000;

const produtos = [];

app.get('/api/produtos', (req, res) => {
    res.json([]);
});

app.post("/api/produtos", (req, res) => {
    const novoProduto = req.body;
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});