import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    termino = '';
  constructor(public _spotifyServices: SpotifyService) {
  }

  ngOnInit() {
  }
  searchArtists() {
    if(this.termino.length === 0) {
      return
    }
    this._spotifyServices.getartistas(this.termino).subscribe();
  }

}
