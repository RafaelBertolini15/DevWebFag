
export default function ListaProdutos({ produtos, carregando, onExcluir }) {
  if (carregando) return <p>Carregando produtos...</p>;
  if (produtos.length === 0) return <p>Nenhum produto cadastrado.</p>;

  return (
    <table className="tabela">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {produtos.map(produto => (
          <tr key={produto.id}>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>
              {produto.preco.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
            </td>
            <td>
              <button
                className="btn-excluir"
                onClick={() => onExcluir(produto.id)}
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
