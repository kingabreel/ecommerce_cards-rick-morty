import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  urlAPI: string = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getCards(){
    return this.http.get(this.urlAPI);
  }
}
