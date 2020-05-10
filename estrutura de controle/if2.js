function teste1(num) {
  if (num > 7) console.log(num);
  console.log(`Final`); //sem chaves executa só uma linha
}
teste1(8);
teste1(6);

function teste2(num) {
  if (num > 7); //setença(errada) vazia por causa do ponto e vírgula
  {
    console.log(num); //executa de qualquer maneira
  }
}

teste2(6);
teste2(8);
