const num = 1234;
let binario = [];
let divisao = num;
let contadorDeUns = 0;
let binarioCorreto = [];

// O laço de repetição a seguir divide o número sempre pela metade. Se a divisão não sobrar resto, o "bit" é zero. Se sobrar resto, o "bit" é um.
while (divisao > 0) {
    if ((divisao % 2) === 0) {
        divisao = divisao / 2;
        binario.push('0');
    } else {
        divisao = divisao / 2 - 0.5;
        binario.push('1');
        contadorDeUns += 1;
    }
}

// O laço de repetição a seguir preenche um array com os bits ordenados da forma correta.
for (let x = (binario.length - 1); x >= 0; x--) {
    binarioCorreto.push(binario[x]);
}

// Aqui o método "join" retorna o array em uma string utilizando um separador específico, que no caso aqui é vazio.
console.log(`O número ${num} em binário é representado por: ${binarioCorreto.join("")}`);
console.log(`E a quantidade de 'bits' iguais a '1' é: ${contadorDeUns}`);