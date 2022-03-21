import { Component, OnInit,Input } from '@angular/core';
import { SOFT } from 'src/app/bbdd/softsListBd';
import { SoftBd } from 'src/app/bbdd/softBd';


@Component({
  selector: 'app-soft-skill',
  templateUrl: './soft-skill.component.html',
  styleUrls: ['./soft-skill.component.css']
})
export class SoftSkillComponent implements OnInit {
  softs: SoftBd []= SOFT
@Input() sotf: SoftBd = SOFT[0]; 
  constructor() { }

  ngOnInit(): void {
  }
  agregarTexto(){
    console.log("click en boton llama a esta funcion agregarTexto")
  }

}
