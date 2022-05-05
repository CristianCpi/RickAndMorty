import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";

import {RickAndMortyService} from "../../service/rick-and-morty.service";
import {Character} from "../../models/Character";
import {PageInfo} from "../../models/PageInfo";
import {selectCharacters} from "../../app-state/characters.selectors";
import {retrieveCharacterList} from "../../app-state/characters.actions";

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent {

  @Input() characters: Character[] | null = [];
  @Input() pageInfo: PageInfo | null;

  @Output() select = new EventEmitter<number>();

  public page: number = 1;
  public characterFound: boolean = true;

  constructor(private store: Store,
              private rickAndMortyService: RickAndMortyService,
              private router: Router) {
  }

  public selectCharacter(id: number): void {
    this.select.emit(id);
  }

  public search(term: string): void {
    this.store.select(selectCharacters).subscribe(item => this.characters = item);
    term = term.toLowerCase();
    this.rickAndMortyService.getFilteredCharacter(term).subscribe(characters => {
      this.characters = characters;
      this.characterFound = true;
    }, error => {
      if (error.status == 404) {
        this.characterFound = false;
      }
    });
  }

  public getPreviousPage(): void {
    if (this.page < 2) {
      this.page = 1;
    } else {
      this.page--;
    }
    this.rickAndMortyService.getAllCharacters(this.page).subscribe((characters) => {
      this.store.dispatch(retrieveCharacterList({characters}));
    }, error => {
      if (error.status == 404) {
        this.router.navigate(['/error']);
      }
    });
  }

  public getNextPage(): void {
    if (this.page == this.pageInfo?.pages) {
      this.page = this.pageInfo?.pages;
    } else {
      this.page++;
    }
    this.rickAndMortyService.getAllCharacters(this.page).subscribe((characters) => {
      this.store.dispatch(retrieveCharacterList({characters}));
    }, error => {
      if (error.status == 404) {
        this.router.navigate(['/error']);
      }
    });
  }
}
