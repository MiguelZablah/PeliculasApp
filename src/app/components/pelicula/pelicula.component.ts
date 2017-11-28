import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula:any;
  regresarA:string="";
  busqueda:string="";

  constructor(public _ps: PeliculasService, public activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe( params =>{
        // console.log(params);
        this.regresarA = params['pag']
        if( params['buscar']){
          this.busqueda = params['buscar'];
        }
        this._ps.getPelicula( params['id']).subscribe( pelicula =>{
          // console.log(pelicula);
          this.pelicula = pelicula
        })
      }
    )
  }

  ngOnInit() {
  }

}
