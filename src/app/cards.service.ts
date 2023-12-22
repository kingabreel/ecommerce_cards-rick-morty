import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  urlAPI: string = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  getCards(): Observable<any> {
    return this.http.get<any>(this.urlAPI);
  }
}
