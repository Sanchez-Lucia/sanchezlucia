import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { NavComponent } from './components/nav/nav.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EmpleoComponent } from './components/empleo/empleo.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { EstudioComponent } from './components/estudio/estudio.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './components/proyectos/proyectos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    SobremiComponent,
    NavComponent,
    ExperienciaComponent,
    EmpleoComponent,
    EducacionComponent,
    EstudioComponent,
    HabilidadesComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "imageSrc"="../../../assets/img/html.png",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "title": "UI",
      "imageHeight": 20,
      "imageWidth": 27,
      "animateTitle": false,
      "animationDuration": 1000,
      "showTitle": false,
      "showUnits": false,
      "showImage": true,
      "showBackground": false,
      "responsive": true,
      "startFromZero": false,
      "lazy": true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
