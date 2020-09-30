import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  newReleases: any[] = [];
  loading: boolean;

  constructor(private spotiService: SpotifyService) {
    this.loading = true;
    this.spotiService.getNewReleases()
      .subscribe((data: any) => {
        this.newReleases = data;
        console.log(data);
        this.loading = false;
      });
  }
}
