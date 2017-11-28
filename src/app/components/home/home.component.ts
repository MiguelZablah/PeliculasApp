import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cartelera:any;
  populares:any;
  ninos:any;

  constructor( public _ps:PeliculasService) {  

    this._ps.getCartelera()
      .subscribe(data => {
        this.cartelera = data
      })

    this._ps.getPopulares()
      .subscribe( data => {
        this.populares =  data
      })

    this._ps.getNinos()
      .subscribe(data => {
        this.ninos = data
      })

  }

}
