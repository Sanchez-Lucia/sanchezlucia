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
    EstudioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
