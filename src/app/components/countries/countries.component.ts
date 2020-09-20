import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styles: [
  ]
})
export class CountriesComponent implements OnInit {

  countries: any[] = [];

  constructor( private http: HttpClient ) {
    console.log('Constructor del Home ejecutado');
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe( (resp: any) => {
        this.countries = resp;
        console.log(resp);
      });
  }

  ngOnInit(): void {
  }

}
