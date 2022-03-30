import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton-agregar',
  templateUrl: './boton-agregar.component.html',
  styleUrls: ['./boton-agregar.component.css']
})
export class BotonAgregarComponent implements OnInit {
@Input() text: string ="";
@Output() btnClick= new EventEmitter//exporto la funcion a donde corresponda
  constructor() { }

  ngOnInit(): void {
  }
agregarClick(){
  this.btnClick.emit();
}
}
