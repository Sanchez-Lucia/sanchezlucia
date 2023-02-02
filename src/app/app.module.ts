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
import { HabilidadComponent } from './components/habilidad/habilidad.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';


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
    HabilidadComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
