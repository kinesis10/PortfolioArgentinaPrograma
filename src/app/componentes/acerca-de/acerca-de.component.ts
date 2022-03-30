import { Component, OnInit,Input, } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
 
  miPortfolio:any;

  constructor(private datosPortfolio:PortfolioService) { }

//@Input() text: string="aca debe ir el nuevo div"; arreglar esto


  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortfolio = data;
    });
  }
  editar(){
    console.log("texto editado");
  }
  agregarSeccion(){
  console.log("agragar nuevo div")
  }
  agregarTexto(){
    console.log("click en boton llama a esta funcion agregarTexto")
  }
}
