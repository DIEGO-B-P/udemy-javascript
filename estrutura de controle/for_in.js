const notas = [6, 4, 1, 2, 10, 8, 7];

for (let i in notas) {
  console.log(i, notas[i]);
}

const pessoa = {
  nome: `Ana`,
  sobrenome: `Silva`,
  idade: 20,
  peso: 60,
};
for (let i in pessoa) {
  console.log(`${i} = ${pessoa[i]}`);
}
