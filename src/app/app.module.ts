import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CountriesComponent } from './components/countries/countries.component';

// Importando rutas
import {ROUTES} from './app.routes';
import { NoimagePipe } from './pipes/noimage.pipe';
import { CardsComponent } from './components/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ArtistComponent } from './components/artist/artist.component';
import { SecureUriPipePipe } from './pipes/SecureUriPipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    CountriesComponent,
    NoimagePipe,
    SecureUriPipePipe,
    CardsComponent,
    LoadingComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
