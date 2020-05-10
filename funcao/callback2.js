const notas = [7, 10, 6.2, 9, 5.1, 0];

//sem callback
const notasBaixas = [];
for (let i in notas) {
  if (notas[i] < 7) notasBaixas.push(notas[i]);
}
console.log(notasBaixas);

//com callback
notasBaixas2 = notas.filter((nota) => nota < 7);
console.log(notasBaixas2);
