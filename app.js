alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//para mostrar no consle qual foi o valor do chute escolhido pelo usuário
console.log('Valor do chute:', chute);

//resultado de comparação entre o número escolhido e o número secreto
console.log('Resultado da comparação:', chute == numeroSecreto);

while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);

    if (chute == numeroSecreto){
        break;
    } else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert (`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

/*if (tentativas > 1){
    alert(`Isso aí! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
    alert(`Isso aí! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}*/
