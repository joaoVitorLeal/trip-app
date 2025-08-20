import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './category';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly baseUrl: string = environment.apiBaseUrl + '/categories';

  constructor(private http: HttpClient) { }

  save(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl, category);
  }

  findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl);
  }
}
