import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-academica',
  templateUrl: './form-academica.component.html',
  styleUrls: ['./form-academica.component.css']
})
export class FormAcademicaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  agregarTexto(){
    console.log("click en boton llama a esta funcion agregarTexto")
  }
}
