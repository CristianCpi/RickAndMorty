import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { RickAndMortyMainComponent } from './component/rick-and-morty-main/rick-and-morty-main.component';
import { CharactersListComponent } from './component/characters-list/characters-list.component';
import { SelectedCharacterComponent } from './component/selected-character/selected-character.component';
import { ErrorComponent } from './component/error/error.component';
import { CharacterCardComponent } from './component/character-card/character-card.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

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
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
