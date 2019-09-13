import { Component, OnInit } from '@angular/core';
import { Aluno} from '../Aluno';
import { SalunosService } from '../salunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  alunos = []

  show:Boolean;
  alunoSelec:Aluno;

  constructor() {
    this.show=false;
   }
   
  selecionaAluno(aluno){
    this.alunoSelec = aluno;
  }

  flag(){
    this.show = !this.show;
  }

  ngOnInit() {
  }
}