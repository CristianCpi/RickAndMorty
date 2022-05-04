import {Character} from "../models/Character";
import {PageInfo} from "../models/PageInfo";

export interface AppState {
  characters: Character[];
  character: Character;
  pageInfo: PageInfo;
}
