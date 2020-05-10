const soma = function (x, y) {
  return x + y;
};

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
};
imprimirResultado(3, 4);
imprimirResultado(3, 4, soma);
imprimirResultado(3, 4, function (x, y) {
  return x - y;
});
//arrow sempre é função anônima
imprimirResultado(3, 4, (x, y) => x * y);

//armazena em uma valiável
const pessoa = {
  falar: function () {
    console.log(`oi falei`);
  },
};
pessoa.falar();
