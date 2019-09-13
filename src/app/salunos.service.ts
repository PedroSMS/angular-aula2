import { Injectable } from '@angular/core';
import { Aluno } from './aluno';
import { ALUNOS } from './alunos-dummy';

@Injectable()
export class SalunosService {

  constructor() { 
  }

  getAlunos(){
    return ALUNOS;
  }

}