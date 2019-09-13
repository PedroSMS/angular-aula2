import { Component, OnInit } from '@angular/core';
import { Turma } from '../turma';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {
  turma = new Turma("TPSI 10.18", new Date('2018-10-21'),new Date('2020-1-21'),"1.18", "ATEC","Muita linda!");

  editar:boolean;

  constructor() { 
    this.editar=true;
  }

  mudaDados(){
    this.editar = !this.editar;
  }
  
  ngOnInit() {
  }

}