let contador = 0;
while (contador <= 10) {
  console.log(`Contador com while ${contador}`);
  contador++;
}
for (let i = 0; i <= 10; i++) {
  console.log(`Contador com o for ${i}`);
}

const notas = [6, 4, 4, 1, 10, 3, 7, 9];

for (let i = 0; i < notas.length; i++) {
  console.log(`Notas ${notas[i]}`);
}
