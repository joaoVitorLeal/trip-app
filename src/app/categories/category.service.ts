import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  save(category: Category): Observable<Category> {
    return this.http.post<Category>('http://localhost:3000/categories', category);
  }

  findAll(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:3000/categories');
  }
}
