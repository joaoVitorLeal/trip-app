import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Place } from './place';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

/**
 * Caso não exista a cláusula providedIn: 'root', este serviço não estará disponível para outros módulos,
 * sendo necessário ir ao arquivo place.module.ts e declarar 'providers: [PlaceService]' dentro do
 * decorator @NgModule.
 */
@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private readonly baseUrl: string = environment.apiBaseUrl + '/places';

  constructor(private http: HttpClient) { }

  save(place: Place): Observable<Place> {
    return this.http.post<Place>(this.baseUrl, place);
  }

  findAll(): Observable<Place[]> {
    return this.http.get<Place[]>(this.baseUrl);
  }

  findByNameOrCategory(name: string, category: string): Observable<Place[]> {
    let queryParams = new HttpParams();
    if(name) {
      queryParams = queryParams.set('name_like', name);
    }
    if(category) {
      queryParams = queryParams.set('category', category);
    }    
    return this.http.get<Place[]>(this.baseUrl, {
        params: queryParams
      });
  }
}
