
const nums = [1,2,4,5]

let requiredSum = 8

const sum = nums.map((valor,indice)=> valor + indice)
console.log(sum);

const resultado = sum.some((valor) => valor === requiredSum)

console.log(resultado);

