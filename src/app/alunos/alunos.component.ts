import { Component, OnInit } from '@angular/core';
import { Aluno} from '../Aluno';
import { SalunosService } from '../salunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  alunos = [];
  show:Boolean;

  constructor(private servicealunos:SalunosService) {
    this.show=false;
    this.getAlunos();
  }
  setAluno(aluno){
    this.servicealunos.setAluno(aluno);
  }
  getAlunos(){
    return this.servicealunos.getAlunos().subscribe(dados => this.alunos = dados);
  }

  flag(){
    this.show = !this.show;
  }

  ngOnInit() {
  }
}