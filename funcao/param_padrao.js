function soma1(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}
console.log("1ª estratégica = ", soma1(), soma1(3), soma1(2, 3));

/*esse tipo de fução não suporta o valor como zero
somando como os valores definidos como padrão (1)*/
console.log(soma1(0, 0, 0));

//gerarando valor padrão
function soma2(a, b, c) {
  a = a !== undefined ? a : 1;
  //1 aqui é o indice
  b = 1 in arguments ? b : 1;
  //melhor estratégia
  c = isNaN(c) ? 1 : c;
  return a + b + c;
}
console.log("2ª estratégica = ", soma2(), soma2(3), soma2(2, 3));
console.log(soma2(0, 0, 0));

//gerando valor padrão do es2015
function soma3(a = 1, b = 1, c = 1) {
  return a + b + c;
}
console.log("3ª estratégica = ", soma3(), soma3(3), soma3(2, 3));
console.log(soma3(0, 0, 0));