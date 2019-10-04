import { Injectable } from '@angular/core';
import { Aluno } from './aluno';
import { ALUNOS } from './alunos-dummy';
import {Observable, of, BehaviorSubject} from 'rxjs';

@Injectable()
export class SalunosService {
  alunos = ALUNOS;
  alunoSelecionado:Aluno;

  constructor() { 
  }

  getAlunos(): Observable<Aluno[]>{
    return of(this.alunos);
  }
  setAluno(aluno){
    this.alunoSelecionado.next(aluno);
  }

  getAluno() : Observable<Aluno>{
    return this.alunoSelecionado;
  }
}