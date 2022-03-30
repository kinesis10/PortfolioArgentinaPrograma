import { Component, OnInit, Input } from '@angular/core';
import { PROYECTOS } from 'src/app/bbdd/proyectos';// importo el arreglo
import { Proyecto } from 'src/app/bbdd/proyecto';// importo la interface
import { BotonAgregarComponent } from '../boton-agregar/boton-agregar.component';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
 proyectos: Proyecto []= PROYECTOS;          // declaro el arreglo de tipo objeto
 botonAgregar: string="";
@Input() proyecto: Proyecto = PROYECTOS [0]; // importo la variable que contiene el arreglo pero solo me muestra el primero
 
constructor(private datosPortfolio: PortfolioService) { }//inyecto el servivio en el componente

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos();                  // lo inicio aca 
  }
 
  agregarTexto(){
    console.log("click en boton llama a esta funcion agregarTexto")
  }
}
