import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { FormAcademicaComponent } from './componentes/form-academica/form-academica.component';
import { ExperienciaLabComponent } from './componentes/experiencia-lab/experiencia-lab.component';
import { AreasConocimientoComponent } from './componentes/areas-conocimiento/areas-conocimiento.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SoftSkillComponent } from './componentes/soft-skill/soft-skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CirculosComponent } from './componentes/circulos/circulos.component';
import { HardSkillComponent } from './componentes/hard-skill/hard-skill.component';
import { Circulos2Component } from './componentes/circulos2/circulos2.component';
import { HerramientasComponent } from './componentes/herramientas/herramientas.component';
import { BotonAgregarComponent } from './componentes/boton-agregar/boton-agregar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    FormAcademicaComponent,
    ExperienciaLabComponent,
    AreasConocimientoComponent,
    ProyectosComponent,
    SoftSkillComponent,
    CirculosComponent,
      HardSkillComponent,
      Circulos2Component,
      HerramientasComponent,
      BotonAgregarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
