function getInteiroAleatorio(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}
let opcao = 0;
let qtd = 0;

do {
  opcao = getInteiroAleatorio(-1, 10);
  console.log(`Opção escolhida foi ${opcao}`);
  qtd++;
} while (opcao != -1);

console.log(`Esse while rodou ${qtd} vezes!!`);
