import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, public spotyfiServices: SpotifyService) { }
     artist: any = {};
      track: any[] = [];
  ngOnInit() {

    this.activatedRoute.params.map(params => params['id']).
        subscribe(id => {
           this.spotyfiServices.getArtista(id).subscribe(artist => {
              this.artist = artist;
              console.log(this.artist);
           });
           this.spotyfiServices.getTop(id)
             .map((response: any) => response.tracks)
             .subscribe(track => {
             this.track = track;
             console.log(this.track);
           });
    });

  }

}
