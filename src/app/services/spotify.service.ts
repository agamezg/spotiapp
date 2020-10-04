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
      Authorization: 'Bearer BQA79DJwG9_C1SFi4eSin_LQlHCJYN80RgFpviwj6B1e0J0DAG12jGf1yPtuGUkglJE7q6pydkXVgsVOLQQ'
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

  getTopTracks(id: string): any {
    return this.getQuery(`artists/${id}/top-tracks?market=ar`)
      .pipe( map ((response: any) => response.tracks));
  }
}
