import { useState } from 'react';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState('');

  function adicionarTarefa(event) {
    event.preventDefault();

    if (texto.trim() === '') {
      alert('Por favor, digite uma tarefa antes de adicionar.');
      return;
    }

    const novaTarefa = {
      id: Date.now(),
      texto: texto,
    };

    setTarefas([...tarefas, novaTarefa]);
    setTexto('');
  }

  function removerTarefa(id) {
    const tarefasAtualizadas = tarefas.filter(
      (tarefa) => tarefa.id !== id
    );

    setTarefas(tarefasAtualizadas);
  }

  return (
    <div className="container">
      <div className="todo">
        <h1>To-do List</h1>

        <form onSubmit={adicionarTarefa} className="formulario">
          <input
            type="text"
            placeholder="Digite uma tarefa..."
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />

          <button type="submit">Adicionar</button>
        </form>

        <ul className="task-list">
          {tarefas.map((tarefa) => (
            <li key={tarefa.id}>
              <span>{tarefa.texto}</span>

              <button
                type="button"
                onClick={() => removerTarefa(tarefa.id)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;