function getInteiroAleatorio(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}
let opcao = 0;
let qtd = 0;

while (opcao != -1) {
  opcao = getInteiroAleatorio(-1, 10);
  console.log(`Opção escolhida foi ${opcao}`);
  qtd++;
}
console.log(`Esse while rodou ${qtd} vezes!!`);
