import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Place } from './place';
import { Observable } from 'rxjs';

/**
 * Caso não exista a cláusula providedIn: 'root', este serviço não estará disponível para outros módulos,
 * sendo necessário ir ao arquivo place.module.ts e declarar 'providers: [PlaceService]' dentro do
 * decorator @NgModule.
 */
@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }

  save(place: Place): Observable<Place> {
    return this.http.post<Place>('http://localhost:3000/places', place);
  }

  findAll(): Observable<Place[]> {
    return this.http.get<Place[]>('http://localhost:3000/places');
  }

  findByNameOrCategory(name: string, category: string): Observable<Place[]> {
    let queryParams = new HttpParams();
    if(name) {
      queryParams = queryParams.set('name_like', name);
    }
    if(category) {
      queryParams = queryParams.set('category', category);
    }    
    return this.http.get<Place[]>('http://localhost:3000/places', {
        params: queryParams
      });
  }
}
