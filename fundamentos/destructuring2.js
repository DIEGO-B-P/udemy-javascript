//passando valores para o array com o destracturing
function rand([min = 0, max = 100]) {
  if (min > max) [min, max] = [max, min];
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}
//passando os dois valores
console.log(rand([50, 40]));
//passando apenas o primeiro
console.log(rand([992]));
//passando o segundo
console.log(rand([, 100]));
//passando nenhum valor
console.log(rand([]));
