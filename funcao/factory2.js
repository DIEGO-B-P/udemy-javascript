function criarProduto(nome, valor) {
  return {
    nome,
    valor,
    desconto: 0.1,
  };
}
console.log(criarProduto(`notebook`, 1500));
console.log(criarProduto(`smartphone`, 750));
