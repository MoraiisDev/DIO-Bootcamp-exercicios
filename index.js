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

// 2) Crie uma classe para representar pessoas.
// Para cada pessoa teremos os atributos nome, peso e altura.
// As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
// Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
// do seu IMC;

class Pessoas {
  nome;
  peso;
  altura;

  constructor (nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }
  mensagem_IMC() {
    console.log(`Meu nome é ${this.nome} e meu IMC é: ` + (this.peso / (this.altura ** 2)).toFixed(2))
  }
}

const José = new Pessoas('José', 70, 1.75)
  José.mensagem_IMC()