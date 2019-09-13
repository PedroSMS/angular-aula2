import { Component, OnInit } from '@angular/core';
import { Aluno} from '../Aluno';
import { ALUNOS } from '../alunos-dummy';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  alunos = ALUNOS;

  show2:Boolean;
  show:Boolean;
  alunoSelec:Aluno;

  constructor() {
    this.show=false;
    this.show2=true;
   }
   
  selecionaAluno(aluno){
    this.alunoSelec = aluno;
  }

  flag(){
    this.show = !this.show;
    this.show2 = !this.show2;
  }

  ngOnInit() {
  }
}