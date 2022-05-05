import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";

import {RickAndMortyService} from "./service/rick-and-morty.service";
import {retrieveCharacterList, retrievePageInfo} from "./app-state/characters.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private rickAndMortyService: RickAndMortyService,
    private store: Store,
    private router: Router
  ) {
  }

  public ngOnInit(): void {
    this.rickAndMortyService.getAllCharacters(1).subscribe((characters) => {
      this.store.dispatch(retrieveCharacterList({characters}));
    }, error => {
      if (error.status == 404) {
        this.router.navigate(['/error']);
      }
    });
    this.rickAndMortyService.getPageInfo().subscribe((pageInfo) => {
      this.store.dispatch(retrievePageInfo({pageInfo}));
    }, error => {
      if (error.status == 404) {
        this.router.navigate(['/error']);
      }
    });
  }
}
