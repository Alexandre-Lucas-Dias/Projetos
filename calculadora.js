const num1 = 5;
const num2 = 7;

function soma(num1, num2){
    return num1 + num2;
}

function subtracao(num1, num2){
    return num1 - num2;
}

function multiplicacao(num1, num2){
    return num1 * num2;
}

function divisao(num1, num2){
    return num1 / num2;
}

console.log(`A soma entre ${num1} e ${num2} é igual a ${soma(num1, num2)}`);
console.log(`A subtração entre ${num1} e ${num2} é igual a ${subtracao(num1, num2)}`);
console.log(`O produto entre ${num1} e ${num2} é igual a ${multiplicacao(num1, num2)}`);
console.log(`A razão entre ${num1} e ${num2} é igual a ${divisao(num1, num2)}`);