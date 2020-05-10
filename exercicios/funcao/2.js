tipoTriangulo = (lado1, lado2, lado3) => {
  if ((lado1 == lado2) == lado3)
    console.log(`Equilátero, valores digitado: ${lado1}`);
  else {
    let array = [lado1, lado2, lado3];
    array.sort();
    if (array[2] >= array[1] + array[0])
      console.log(`Não é um triângulo com essas medidas!!`);
    else if (array[0] == array[1])
      console.log(`Isócele, valores iguais: ${lado1}`);
    else console.log(`Escaleno, valores: ${lado1},${lado2},${lado3}`);
  }
};

//testes (retire os comentário abaixo)
tipoTriangulo(1, 1, 1);
/*tipoTriangulo(2, 3, 2);
tipoTriangulo(4, 2, 3);
tipoTriangulo(1, 1, 2);*/
