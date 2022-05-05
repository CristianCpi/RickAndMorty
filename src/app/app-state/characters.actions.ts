import { createAction, props } from '@ngrx/store';

import {Character} from "../models/Character";
import {PageInfo} from "../models/PageInfo";

export const retrieveCharacterList = createAction(
  '[Character List/API] Retrieve Characters Success',
  props<{ characters: Character[] }>()
);

export const retrieveOneCharacter = createAction(
  '[Character List] Retrieve one character',
  props<{ character: Character }>()
);

export const retrievePageInfo = createAction(
  '[Page List] Retrieve the pages information',
  props<{ pageInfo: PageInfo }>()
);
