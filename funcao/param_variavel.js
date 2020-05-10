//função criada sem a existencia de parâmetros
//porém ela retornarar a soma sem erro
function soma() {
  let soma = 0;
  for (i in arguments) {
    soma += arguments[i];
  }
  return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(4, 6, 10, 9));
console.log(soma(1, 3, 3, ' teste'));//aceita como parametro strings
