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

  constructor(private servicealunos:SalunosService) {
    this.show=false;
    this.alunos = this.servicealunos.getAlunos();
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