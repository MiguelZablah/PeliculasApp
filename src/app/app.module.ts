import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Jsonp } from '@angular/http';

// Router
import { APP_ROUTING } from './app.routes';

// Servicios
import { PeliculasService } from './services/peliculas.service';

// Pipes
import { ImgUrlPipe } from './pipes/img-url.pipe';

// Component
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { GaleriaComponent } from './components/home/galeria.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { DividePipe } from './pipes/divide.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BuscarComponent,
    GaleriaComponent,
    PeliculaComponent,
    ImgUrlPipe,
    DividePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    APP_ROUTING
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
