const db = require("./produto");

function findAll() {
  return db.prepare("SELECT id, nome, preco FROM produtos").all();
}

function findById(id) {
  return db.prepare(
    "SELECT id, nome, preco FROM produtos WHERE id = ?"
  ).get(id);
}

function create(produto) {
  const result = db.prepare(
    "INSERT INTO produtos (nome, preco) VALUES (?, ?)"
  ).run(produto.nome, produto.preco);

  return findById(result.lastInsertRowid);
}

function update(id, produto) {
  const result = db.prepare(`
    UPDATE produtos
    SET nome = ?, preco = ?
    WHERE id = ?
  `).run(produto.nome, produto.preco, id);

  return result.changes > 0;
}

function deleteById(id) {
  const result = db.prepare(
    "DELETE FROM produtos WHERE id = ?"
  ).run(id);

  return result.changes > 0;
}

module.exports = { findAll, findById, create, update, deleteById };

