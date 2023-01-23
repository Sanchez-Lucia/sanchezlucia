import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsheaderComponent } from './componentsheader/componentsheader.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { RrssComponent } from './components/rrss/rrss.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsheaderComponent,
    HeaderComponent,
    BannerComponent,
    RrssComponent,
    LogoApComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
