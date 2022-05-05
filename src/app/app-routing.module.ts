import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ErrorComponent} from "./component/error/error.component";
import {RickAndMortyMainComponent} from "./component/rick-and-morty-main/rick-and-morty-main.component";
import {SelectedCharacterComponent} from "./component/selected-character/selected-character.component";

const routes: Routes = [
  {
    path: 'character/:id',
    component: SelectedCharacterComponent
  },
  {
    path: '',
    component: RickAndMortyMainComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
