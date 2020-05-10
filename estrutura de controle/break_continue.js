const nums = [];

//populando o array
for (let i = 0; i < 10; i++) {
  nums[i] = i + 1;
}
//imprimir até o elemento fo igual a 5
for (let i in nums) {
  if (i == 5) {
    break; // condição de parada
  }
  console.log(nums[i]);
}

//interrompe quando a condição for igual a 5
for (let i in nums) {
  if (i == 5) {
    continue; //não faz o bloco
  }
  console.log(nums[i]);
}

//Não é elegante fazer um for dentro do outro
externo: for (let a in nums) {
  for (let y in nums) {
    if (a == 2 && y == 3) {
      break externo;
    }
    console.log(`Par ${a}, ${y}`);
  }
}
