import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personagem } from './component/card/card.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public url: string = "http://localhost:3000/personagens";
  constructor(private _httpclient: HttpClient) { }

  public getPersonagens(): Observable<Personagem[]> {
    
    return this._httpclient.get<Personagem[]>(this.url)

  }
}