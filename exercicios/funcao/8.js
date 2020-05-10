function retornaRecord(pontuacao) {
  let listaPontuacaoString = pontuacao.split(' ');
  let listaPontuacao = [];
  for (let y in listaPontuacaoString) {
    listaPontuacao[y] = parseInt(listaPontuacaoString[y]);
  }
  let record = listaPontuacao[0];
  let quantidadeRecord = 0;
  let menor = listaPontuacao[0];

  for (let i in listaPontuacao) {
    if (listaPontuacao[i] > record) {
      record = listaPontuacao[i];
      quantidadeRecord++;
    }
    if (menor < listaPontuacao[i]) menor = i;
  }
  return `[${quantidadeRecord},${menor}]`;
}
console.log(retornaRecord('10 20 20 8 25 3 0 30 1'));
