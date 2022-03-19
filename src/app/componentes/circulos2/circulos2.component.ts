import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circulos2',
  templateUrl: './circulos2.component.html',
  styleUrls: ['./circulos2.component.css']
})
export class Circulos2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  agregarTexto(){
    console.log("click en boton llama a esta funcion agregarTexto")
  }
}
