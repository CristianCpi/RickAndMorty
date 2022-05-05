import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

import {selectOneCharacter} from "../../app-state/characters.selectors";
import {Character} from "../../models/Character";
import {RickAndMortyService} from "../../service/rick-and-morty.service";
import {retrieveOneCharacter} from "../../app-state/characters.actions";

@Component({
  selector: 'app-selected-character',
  templateUrl: './selected-character.component.html',
  styleUrls: ['../../app.component.scss']
})
export class SelectedCharacterComponent implements OnInit {

  public character$ = this.store.select(selectOneCharacter);
  private routeSub: Subscription;

  public character: Character | null = {id: 0, status: '', species: '', type: '', name: '', image: '', origin: {name: ''}} ;

  constructor(private store: Store,
              private rickAndMortyService: RickAndMortyService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.rickAndMortyService.getOneCharacter(params['id']).subscribe((character) => {
        this.store.dispatch(retrieveOneCharacter({ character }));
      }, error => {
        if (error.status == 404) {
          this.router.navigate(['/error']);
        }
      });
    });
    this.character$.subscribe(item => this.character = item);
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
