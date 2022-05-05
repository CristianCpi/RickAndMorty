import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";

import {RickAndMortyService} from "../../service/rick-and-morty.service";
import {selectCharacters, selectPageInfo} from "../../app-state/characters.selectors";

@Component({
  selector: 'app-rick-and-morty-main',
  templateUrl: './rick-and-morty-main.component.html'
})
export class RickAndMortyMainComponent {

  public characters$ = this.store.select(selectCharacters);
  public pageInfo$ = this.store.select(selectPageInfo);

  constructor(private store: Store,
              private rickAndMortyService: RickAndMortyService,
              private router: Router) { }

  public onSelect(characterId: number): void {
    this.router.navigate(['/character', characterId]);
  }

}
