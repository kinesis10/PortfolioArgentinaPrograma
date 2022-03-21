import { Component, OnInit, Input } from '@angular/core';
import { PROYECTOS } from 'src/app/bbdd/proyectos';// importo el arreglo
import { Proyecto } from 'src/app/bbdd/proyecto';// importo la interface
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
 proyectos: Proyecto []= PROYECTOS;          // declaro el arreglo de tipo objeto
@Input() proyecto: Proyecto = PROYECTOS [0]; // importo la variable que contiene el arreglo pero solo me muestra el primero
  constructor() { }

  ngOnInit(): void {
  }
  agregarTexto(){
    console.log("click en boton llama a esta funcion agregarTexto")
  }
}
