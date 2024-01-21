// 1) Crie uma classe para representar carros.
//  Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
//  Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor
//  gasto em reais para realizar este percurso.

const Combustível = 5.63; // O L da gasolina em media
let Kilômetros = parseFloat; // Difere para cada carro

class Carros {
  nome; // modelo do carro
  marca; // marca do carro
  cor; // cor do carro

  gasto_medio() {
    console.log(`O meu carro é um ${this.marca} ${this.nome} ${this.cor} e ele tem um consumo de R$` + (Kilômetros / Combustível).toFixed(2) + ` por Litro`);
  }
}

const corolla = new Carros();
  corolla.nome = `Corolla`;
  corolla.marca = `Toyota`;
  corolla.cor = `Preto`;
  Kilômetros = 30.2 // Corolla faz em média 30,2km/l

  corolla.gasto_medio() // Saída: 30,2 / 5,63 => R$ 5,36