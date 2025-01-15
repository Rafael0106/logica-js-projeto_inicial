alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 a 10');

console.log('Valor do chute:', chute);

console.log('Resultado da comparação:', chute == numeroSecreto);

if (chute == numeroSecreto){
    alert(`Isso aí! você descobriu o número secreto ${numeroSecreto}`);
} else {
    if (chute > numeroSecreto){
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`)
    }
}