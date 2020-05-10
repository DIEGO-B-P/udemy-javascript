let num1 = 1;
let num2 = 2;

num1++; //pós fixada
console.log(num1);

--num1; //pré fixada (executa primeiro)
console.log(num1);

/*resultado verdadeiro pois executa 
a incrementação primeiro,
verifica e assim depois decrementa*/
console.log(++num1 === num2--);