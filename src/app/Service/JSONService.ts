import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filmes } from '../Models/Filmes';

@Injectable({
    providedIn: 'root'
  })
export class JsonService {

   constructor(private http: HttpClient) {
    }

    public getJSON(): Observable<Filmes[]> {
        return this.http.get<Filmes[]>("./assets/filmes.JSON");
    }
}