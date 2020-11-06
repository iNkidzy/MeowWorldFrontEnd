import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cat} from './cat.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'})
export class CatService{
  constructor(private http: HttpClient) { }

  // Create
    createCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>('https://localhost:46296/api/cats', cat); // check url
  }

  // GetAllCats
  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>('https://localhost:46296/api/cats');
  }
 // GetCatsbyID
  getCatById(id: number): Observable<Cat> {
    return this.http.get<Cat>('https://localhost:46296/api/cats/' + id);
  }
 // Delete by ID
  delete(price: number): Observable<Cat> {
    return this.http.delete<Cat>('https://localhost:46296/api/cats/' + price);
  }
  // Add Edit Cats Here:
}
