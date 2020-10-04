import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private httpClient: HttpClient) {
    console.log('Constructor del SpotifyService');
  }

  getQuery(query: string): any{
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDt20Eejsd3BHEv0JXbF-R2cVsODNH5WmwvvpAvUSGxsWaDqMPrwyk9ALhuhAc2HpGbdFLCW5AGhuz5FZQ'
    });
    return this.httpClient.get(url, {headers});
  }

  getNewReleases(): any {
    return this.getQuery('browse/new-releases')
      .pipe( map ((response: any) => response.albums.items));
  }

  searchArtists(keyWord: string): any {
    return this.getQuery(`search?q=${keyWord}&type=artist&limit=15`)
      .pipe( map ((response: any) => response.artists.items));
  }

  searchArtist(id: string): any {
    return this.getQuery(`artists/${id}`);
  }
}
