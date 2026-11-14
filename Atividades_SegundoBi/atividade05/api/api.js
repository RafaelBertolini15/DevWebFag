const express = require('express');
const cors = require('cors');

const api = express();
api.use(cors());
api.use(express.json());
const produtoRoutes = require("./router/produtoRoutes");
api.use("/atv/produtos", produtoRoutes);
const PORTA = 1515;

api.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});
