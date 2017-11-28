import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  buscar:string = "";
  notFound:boolean = false;

  constructor( public _ps:PeliculasService, public activeRoute: ActivatedRoute ) { 
    this.activeRoute.params.subscribe(
      params => {
        if( params['texto'] ){
          this.buscar = params['texto'];
          this.buscarPelicula();
        }
        
      }
    )
  }

  ngOnInit() {
  }

  buscarPelicula(){
    if( this.buscar.length == 0 ){
      return;
    }
    this._ps.buscarPeliculas( this.buscar )
    .subscribe( data => {
      if( this._ps.peliculas.length == 0 ){
        this.notFound = true;
      }else{
        this.notFound = false;
      }
    })

  }

}
