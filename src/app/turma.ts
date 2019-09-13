export class Turma {
  curso:string;
  dataInicio:Date;
  dataFim:Date;
  sala:string;
  academia:string;
  descricao:string;

  constructor(curso, dataI, dataF, sala, academia, descricao){
    this.curso=curso;
    this.dataInicio=dataI;
    this.dataFim=dataF;
    this.sala=sala;
    this.academia=academia;
    this.descricao=descricao;
  }
}