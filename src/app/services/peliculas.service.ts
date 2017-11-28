import { Injectable } from '@angular/core';

import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PeliculasService {

  private apikey:string = "869bb0fc6870dc02f830c0b0e2653fd8";
  private urlMoviedb: string = "https://api.themoviedb.org/3";

  // URL Imagen
  //image.tmbd.org/t/p/w300/{ Imagen }

  peliculas:any[] = [];

  constructor( private jsonp:Jsonp ) { }

  getCartelera() {

    let url = `${this.urlMoviedb}/movie/now_playing?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .map(res => res.json().results );

  }
  
  getNinos() {

    let url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by+popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .map(res => res.json().results);

  }

  getPopulares() {

    let url = `${this.urlMoviedb}/discover/movie?sort_by+popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .map(res => res.json().results);

  }

  buscarPeliculas( texto:string ){

    let url = `${this.urlMoviedb}/search/movie?query=${ texto }&sort_by+popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .map(res => {
        this.peliculas = res.json().results
        res.json().results
      } );
  }

  getPelicula( id:string ) {

    let url = `${this.urlMoviedb}/movie/${ id }?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .map(res => res.json());
  }

}
