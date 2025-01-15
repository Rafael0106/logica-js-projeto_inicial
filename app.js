alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 a 10');

if (chute == numeroSecreto){
    console.log(`Isso aí! você descobriu o número secreto ${numeroSecreto}`);
} else {
    alert('Você errou :(')
}