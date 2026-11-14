const Database = require("better-sqlite3");
const fs = require("node:fs");
const path = require("node:path");
const currentDirectory = path.resolve(__dirname, "..");
const databaseDirectory = path.join(currentDirectory, "database");

fs.mkdirSync(databaseDirectory, { recursive: true });
const databasePath = path.join(databaseDirectory, "database.sqlite");
const db = new Database(databasePath);
db.pragma("foreign_keys = ON");

db.exec(`
  CREATE TABLE IF NOT EXISTS produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL CHECK (length(trim(nome)) > 0),
    preco REAL NOT NULL
      CHECK (typeof(preco) IN ('integer', 'real') AND preco >= 0),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

if (db.prepare("SELECT COUNT(*) AS total FROM produtos").get().total === 0) {
  const inserirProduto = db.prepare(
    "INSERT INTO produtos (nome, preco) VALUES (?, ?)"
  );

  db.transaction(() => {
    inserirProduto.run("Teclado", 120);
    inserirProduto.run("Mouse", 65.90);
    inserirProduto.run("Monitor", 899.90);
  })();
}

module.exports = db;