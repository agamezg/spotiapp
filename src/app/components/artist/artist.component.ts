import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(private router: ActivatedRoute,
              private spotiService: SpotifyService) {
    this.router.params.subscribe(params => {
      console.log(`Receiving id: ${params.id} in artist component`);
      const id = params.id;
      this.getArtist(id);
      this.getTopTracks(id);
    });
  }

  getArtist(id: string): void {
    this.loading = true;
    this.spotiService.searchArtist(id)
      .subscribe( artist => {
        console.log('Artist founded');
        console.log(artist);
        this.artist = artist;
        this.loading = false;
      });
  }

  getTopTracks(id: string): void {
    this.spotiService.getTopTracks(id)
      .subscribe( topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;
      });
  }
}
