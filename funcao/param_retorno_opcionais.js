function area(largura, altura) {
  const area = largura * altura;
  if (area > 20) {
    console.log(`Valor acima do permitido: ${area}m².`);
  } else {
    return area;
  }
}
console.log(area(2, 2)); //paramentros correto
console.log(area(2)); // somente 1 paramentro
console.log(area()); //sem parametro
console.log(area(2, 3, 2, 4)); //passado paramentros além
console.log(area(5, 5)); // parametro correto mas com valor acima do permitido
