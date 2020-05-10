export function transformaEmMoeda(valor) {
  return `R$ ${valor.toFixed(2).toString().replace('.', ',')}`;
}

console.log(transformaEmMoeda(0.30000000000004));
console.log(transformaEmMoeda(1.524));
