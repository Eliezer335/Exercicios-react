export default function ListaDeProdutos() {
  const produtos = [
    { id: 1, nome: 'Camisa', preco: 49.9 },
    { id: 2, nome: 'Calça', preco: 89.9 },
    { id: 3, nome: 'Tênis', preco: 199.9 },
  ];
  const somaDosProd = produtos.reduce((acc,produto) => acc + produto.preco, 0).toFixed(2)
  
   return (
    <div>
      <h2>Produtos</h2>
      <ul>
        {produtos.map(produtos => (
            <li>
                <p>{produtos.nome} Preço: {produtos.preco}</p>
            </li>
        ))}
        <li>Total dos Produtos: {somaDosProd}</li>
      </ul>
    </div>
  );
}

