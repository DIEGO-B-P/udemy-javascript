function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log(`Aprovado ${nota}`);
  }
}

soBoaNoticia(8.1);
soBoaNoticia(6);

function soForVerdade(valor) {
  if (valor) {
    console.log(`É verdade ... ${valor}`);
  }
}

soForVerdade();
soForVerdade(true);

//há a possibilidade de verificar se uma string está vazia
soForVerdade("");
