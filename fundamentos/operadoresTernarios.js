//esse operador pode se dizer que precisa de 3 situação para fazer a operação
//nesse caso verifica a nota de for maoir ou igual a 7 retorna aprovado caso contrario reprovado
const resultado = (nota) => (nota >= 7 ? "Aprovado" : "Reprovado");

console.log(resultado(7.1));

console.log(resultado(6.7));

/*há a possibilidade de guardar a resposta em uma variavel
const status = nota >= 7 ? "Aprovado" : "Reprovado";*/
