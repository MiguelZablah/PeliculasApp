import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgUrl'
})
export class ImgUrlPipe implements PipeTransform {

  transform(pelicula: any, poster:boolean = false ): any {
    
    let url = "http://image.tmdb.org/t/p/w500/";

    if( poster ){
      return url + pelicula.poster_path;
    }

    if (pelicula.backdrop_path ){
      return url + pelicula.backdrop_path;
    }else{
      if (pelicula.poster_path){
        return url + pelicula.poster_path;
      }else{
        return "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
      }
    }
  }

}
