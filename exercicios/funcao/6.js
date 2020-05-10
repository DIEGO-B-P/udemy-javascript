//ainda não sei importar função de outro arquivo
function transformaEmMoeda(valor) {
  return `R$ ${valor.toFixed(2).toString().replace('.', ',')}`;
}

function jurosSimples(capInicial, txJuros, tempoAplicacao) {
  //M = C . (1 + i . t)
  return capInicial * (1 + (txJuros / 100) * tempoAplicacao);
}

function jusrosComposto(capInicial, txJuros, tempoAplicacao) {
  //M = C (1+i)^t
  return capInicial * (Math.pow(1 + txJuros/100, tempoAplicacao));
}

let simples = transformaEmMoeda(jurosSimples(1200, 2, 15));
console.log(`Juros simples: ${simples}`);

let composto = transformaEmMoeda(jusrosComposto(5000, 1, 6));
console.log(`Juros composto: ${composto}`);
