import { Injectable } from '@angular/core';
import { Aluno } from './aluno';
import { ALUNOS } from './alunos-dummy';
import {Observable, of, BehaviorSubject} from 'rxjs';

@Injectable()
export class SalunosService {
  alunos = ALUNOS;
  constructor() { 
  }

  getAlunos(): Observable<Aluno[]>{
    return of(this.alunos);
  }

}