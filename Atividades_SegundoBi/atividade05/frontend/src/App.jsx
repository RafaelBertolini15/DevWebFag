
import { useState, useEffect } from 'react';
import FormProduto from './components/FormProduto';
import ListaProdutos from './components/ListaProdutos';
import './App.css';

const API_URL = 'http://localhost:1515/atv/produtos';

export default function App() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [mensagem, setMensagem] = useState({ texto: '', tipo: '' });

  function mostrarMensagem(texto, tipo) {
    setMensagem({ texto, tipo });
    setTimeout(() => setMensagem({ texto: '', tipo: '' }), 4000);
  }

  async function carregarProdutos() {
    try {
      const resposta = await fetch(API_URL);

      if (!resposta.ok) throw new Error();

      setProdutos(await resposta.json());
    } catch {
      mostrarMensagem('Erro ao carregar produtos. Verifique a API.', 'erro');
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function cadastrarProduto(nome, preco) {
    try {
      const resposta = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, preco })
      });

      const dados = await resposta.json();

      if (!resposta.ok) throw new Error(dados.mensagem);

      mostrarMensagem('Produto cadastrado com sucesso!', 'sucesso');
      await carregarProdutos();
      return true;
    } catch (erro) {
      mostrarMensagem(erro.message || 'Erro ao cadastrar produto.', 'erro');
      return false;
    }
  }

  async function excluirProduto(id) {
    if (!window.confirm('Deseja excluir este produto?')) return;

    try {
      const resposta = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      });

      const dados = await resposta.json();

      if (!resposta.ok) throw new Error(dados.mensagem);

      mostrarMensagem(dados.mensagem, 'sucesso');
      await carregarProdutos();
    } catch (erro) {
      mostrarMensagem(erro.message || 'Erro ao excluir produto.', 'erro');
    }
  }

  return (
    <main className="container">
      <h1>Gerenciador de Produtos</h1>

      {mensagem.texto && (
        <p className={`mensagem ${mensagem.tipo}`}>
          {mensagem.texto}
        </p>
      )}

      <FormProduto onCadastrar={cadastrarProduto} />

      <h2>Produtos cadastrados</h2>

      <ListaProdutos
        produtos={produtos}
        carregando={carregando}
        onExcluir={excluirProduto}
      />
    </main>
  );
}
