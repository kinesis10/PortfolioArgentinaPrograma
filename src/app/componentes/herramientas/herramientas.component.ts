import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export class HerramientasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  agregarTexto(){
    console.log("click en boton llama a esta funcion agregarTexto")
  }
}
