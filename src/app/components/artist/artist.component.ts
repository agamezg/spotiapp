import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe(params => {
      console.log(`Receiving id: ${params.id} in artist component`);
    });
  }

}
