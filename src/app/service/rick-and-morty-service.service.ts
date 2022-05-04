import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Character} from "../models/Character";
import {PageInfo} from "../models/PageInfo";

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyServiceService {

  private readonly rickAndMortyUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(protected readonly http: HttpClient) { }


  public getAllCharacters(page: number): Observable<Array<Character>> {
    if(page == 0){
      return this.http.get<{ results: Character[] }>(this.rickAndMortyUrl).pipe(map((characters) => characters.results || []));
    } else {
      return this.http.get<{ results: Character[] }>(`${this.rickAndMortyUrl}/?page=${page}`).pipe(map((characters) => characters.results || []));
    }
  }

  public getOneCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.rickAndMortyUrl}/${id}`);
  }

  public getPageInfo(): Observable<PageInfo> {
    return this.http.get<{ info: PageInfo }>(this.rickAndMortyUrl).pipe(map((characters) => characters.info || []));
  }

  public getFilteredCharacter(name: string): Observable<Character[]> {
    return this.http.get<{ results: Character[] }>(`${this.rickAndMortyUrl}/?name=${name}`).pipe(map((characters) => characters.results || []));
  }
}
