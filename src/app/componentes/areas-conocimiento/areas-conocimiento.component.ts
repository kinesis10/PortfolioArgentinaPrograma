import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areas-conocimiento',
  templateUrl: './areas-conocimiento.component.html',
  styleUrls: ['./areas-conocimiento.component.css']
})
export class AreasConocimientoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  agregarTexto(){
    console.log("click en boton llama a esta funcion agregarTexto")
  }
}
