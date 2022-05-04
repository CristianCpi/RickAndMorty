import { createFeatureSelector } from '@ngrx/store';
import {Character} from "../models/Character";
import {PageInfo} from "../models/PageInfo";

export const selectCharacters = createFeatureSelector<Character[]>('characters');

export const selectOneCharacter = createFeatureSelector<Character>('character');

export const selectPageInfo = createFeatureSelector<PageInfo>('pageInfo');
