import { Component, OnInit, Input } from '@angular/core';
import { Aluno } from '../aluno';
import { SalunosService } from '../salunos.service';

@Component({
  selector: 'app-detalhes-aluno',
  templateUrl: './detalhes-aluno.component.html',
  styleUrls: ['./detalhes-aluno.component.css']
})
export class DetalhesAlunoComponent implements OnInit {
  aluno:Aluno;
  @Input() show:Boolean;

  constructor(private servicealunos:SalunosService) { 
    //this.getAluno();
    if(this.show)
    {
      this.getAluno();
    }
  }

  getAluno(){
    return this.servicealunos.getAluno().subscribe(dados=>this.aluno = dados);
  }

  ngOnInit() {
  }
}