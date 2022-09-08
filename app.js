var numeroSecreto = parseInt(Math.random()*10);
var tentativas = 3;

while(tentativas
     > 0){
         var chute = parseInt(prompt("Digite um número de 0 a 10: "));
         if(numeroSecreto == chute){
             tentativas = tentativas - 1;
             alert('Parabens voce acertou!')
             break
             
         }else if(numeroSecreto > chute){
             tentativas = tentativas - 1;
             alert('O número secreto é maior');

         }else if(numeroSecreto < chute){
             tentativas = tentativas - 1;
             alert('O número secreto é menor');
         }
     }

     if(chute != numeroSecreto){
         document.write("<h2> Suas tentativas acabaram. O número secreto é: " + numeroSecreto + "<h2>");
     }