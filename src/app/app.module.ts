import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';

//rutas
import { APP_ROUTING } from './app.routes';
import { HeroesComponent } from './components/heroes/heroes.component';


// servicios
import {HeroesServices} from './servicios/heroes.services';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscardorComponent } from './components/buscardor/buscardor.component';


// componentes

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscardorComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [HeroesServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
