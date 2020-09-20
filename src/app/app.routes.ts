import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import {CountriesComponent} from './components/countries/countries.component';

export const ROUTES: Routes = [
     { path: 'home', component: HomeComponent},
     { path: 'search', component: SearchComponent},
     { path: 'countries', component: CountriesComponent},
     { path: '', pathMatch: 'full', redirectTo: 'home'},
     { path: '**', component: HomeComponent},
];
