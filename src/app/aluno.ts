export class Aluno {
  nome:string;
  idade:number;
  morada:string;
  email:string;
  telefone:number;

  constructor(nome, idade, morada, email, telefone){
    this.nome = nome;
    this.idade = idade;
    this.morada = morada;
    this.email = email;
    this.telefone = telefone;
  }
}