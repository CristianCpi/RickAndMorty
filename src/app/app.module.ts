import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RickAndMortyMainComponent } from './component/rick-and-morty-main/rick-and-morty-main.component';
import { CharactersListComponent } from './component/characters-list/characters-list.component';
import { SelectedCharacterComponent } from './component/selected-character/selected-character.component';
import { ErrorComponent } from './component/error/error.component';
import { CharacterCardComponent } from './component/character-card/character-card.component';
import {charactersReducer, pageInfoReducer, selectedCharacterReducer} from "./app-state/characters.reducer";

@NgModule({
  declarations: [
    AppComponent,
    RickAndMortyMainComponent,
    CharactersListComponent,
    SelectedCharacterComponent,
    ErrorComponent,
    CharacterCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    StoreModule.forRoot({characters: charactersReducer, character: selectedCharacterReducer, pageInfo: pageInfoReducer}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
