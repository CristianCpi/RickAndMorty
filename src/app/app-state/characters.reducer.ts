import { createReducer, on } from '@ngrx/store';

import {Character} from "../models/Character";
import {retrieveCharacterList, retrieveOneCharacter, retrievePageInfo} from "./characters.actions";
import {PageInfo} from "../models/PageInfo";

export const initialState: Character[] = [];

export const charactersReducer = createReducer(
  initialState,
  on(retrieveCharacterList, (state, { characters }) => characters),
);

export const selectedCharacterInitialState: Character = {id: 0, status: '', species: '', type: '', name: '', image: '', origin: {name: ''}};

export const selectedCharacterReducer = createReducer(
  selectedCharacterInitialState,
  on(retrieveOneCharacter, (state, { character }) => character)
);

export const pageInfoInitialState: PageInfo = {pages: 0, count: 0};

export const pageInfoReducer = createReducer(
  pageInfoInitialState,
  on(retrievePageInfo, (state, { pageInfo }) => pageInfo)
);
