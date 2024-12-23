// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

function Subtrair(vitorias, derrotas) {
    return vitorias - derrotas;
  }
  let saldoVitorias = Subtrair(151, 50); 
  let nivel = (0)

if (saldoVitorias <= 10){
nivel = 'Ferro'
}
   
if(saldoVitorias > 10 && saldoVitorias <=20){
    nivel = 'Bronze'
}
if(saldoVitorias > 20 && saldoVitorias <=50){
    nivel = 'Prata'
}
if(saldoVitorias > 50 && saldoVitorias <=80){
    nivel = 'Ouro'
}
if(saldoVitorias > 80 && saldoVitorias <=90){
    nivel = 'Diamante'
}
if(saldoVitorias > 90 && saldoVitorias <=100){
    nivel = 'Lendário'
}
if(saldoVitorias > 100){
    nivel = 'Imortal'
}

console.log("O Herói tem saldo de vitorias " + saldoVitorias + " está no nivel de " + nivel);