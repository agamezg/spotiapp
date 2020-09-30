import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean;

  constructor(private spotiService: SpotifyService) { }

  search(keyword: string): void {
    this.loading = true;
    this.spotiService.searchArtists(keyword)
      .subscribe((data: any) => {
        this.artists = data;
        console.log(data);
        this.loading = false;
      });
  }
}
