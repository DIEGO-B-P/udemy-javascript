//clousere é o escopo criado quando uma função é declada
//esse escopo permite a função acessar e manipular variáveis externas `a função

//contexto léxico
const x = `global`;

function fora() {
  const x = `local`;
  function dentro() {
    return x;
  }
  return dentro;
}
const minhaFuncao = fora();
// imprime "local" pois a função carrega consigo a posição fisica onde foi declada
console.log(minhaFuncao());
