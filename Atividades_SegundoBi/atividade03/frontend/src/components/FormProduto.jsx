
import { useState } from 'react';

export default function FormProduto({ onCadastrar }) {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [erro, setErro] = useState('');
  const [enviando, setEnviando] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setErro('');

    const valor = Number(preco);

    if (!nome.trim() || !preco || !Number.isFinite(valor) || valor <= 0) {
      setErro('Informe um nome e um preço maior que zero.');
      return;
    }

    setEnviando(true);

    try {
      const sucesso = await onCadastrar(nome.trim(), valor);

      if (sucesso) {
        setNome('');
        setPreco('');
      }
    } finally {
      setEnviando(false);
    }
  }

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h2>Cadastrar produto</h2>

      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        value={nome}
        onChange={e => setNome(e.target.value)}
        placeholder="Nome do produto"
      />

      <label htmlFor="preco">Preço (R$)</label>
      <input
        id="preco"
        type="number"
        min="0.01"
        step="0.01"
        value={preco}
        onChange={e => setPreco(e.target.value)}
        placeholder="Preço"
      />

      {erro && <p className="mensagem erro">{erro}</p>}

      <button disabled={enviando}>
        {enviando ? 'Salvando...' : 'Cadastrar'}
      </button>
    </form>
  );
}
