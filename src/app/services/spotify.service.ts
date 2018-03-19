import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
   headers = new HttpHeaders({
     'authorization': 'Bearer BQBnb-4Or6iaHS1QIfQOjkJEHJ_x3grtNm-821E7dZqzSPZ-E83pH6QUDz9LTl7Q4GKvMhkvhEiee5t-CvI'
   });
   artistas: any[] = [];
   urlSpotyfi = 'https://api.spotify.com/v1/';
  constructor(public http: HttpClient) {
    console.log('services spotify');
  }
  getartistas(termino: string) {
    const URL = `${this.urlSpotyfi}search?query=${termino}&type=artist&market=US&offset=0&limit=20`;
    return this.http.get(URL, {headers: this.headers})
                    .map((response: any) => {
                      this.artistas = response.artists.items;
                      return this.artistas;
                    });
  }

  getTop(id: string) {
    const URL = `${this.urlSpotyfi}artists/${id}/top-tracks?country=uS`;
    return this.http.get(URL, {headers: this.headers});

  }

  getArtista(idArtist: string) {
    const URL = `${this.urlSpotyfi}artists/${idArtist}`;
    return this.http.get(URL, {headers: this.headers});
      /*.map((response: any) => {
        return response;
      });*/
  }

}
