import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TurmaComponent } from './turma/turma.component';
import { AlunosComponent } from './alunos/alunos.component';
import { DetalhesAlunoComponent } from './detalhes-aluno/detalhes-aluno.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TurmaComponent, AlunosComponent, DetalhesAlunoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
