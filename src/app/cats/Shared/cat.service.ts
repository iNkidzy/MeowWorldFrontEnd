import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Cat} from './cat.model';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../../shared/service/authentication.service';
import {environment} from '../../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'})

export class CatService{
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {}


  // Create
    createCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>('https://localhost:46296/api/cats', cat); // check url
  }

  // GetAllCats
  getCats(): Observable<Cat[]> {
   // return this.http.get<Cat[]>('https://localhost:46296/api/cats');
    // add authorization header with jwt token
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    // get users from api
    return this.http.get<Cat[]>(environment.apiUrl + '/api/cats/', httpOptions);
  }
 // GetCats byID
  getCatById(id: number): Observable<Cat> {
    return this.http.get<Cat>('https://localhost:46296/api/cats/' + id);
  }
 // Delete by ID
  delete(id: number): Observable<Cat> {
    return this.http.delete<Cat>('https://localhost:46296/api/cats/' + id);
  }
  // Add Edit Cats Here:
  // Update by ID
   update(id: number, cat: Cat): Observable<Cat> {
     // return this.http.put<Cat>('environment.apiUrl + '/api/cats/'' + id);
     return this.http.put<Cat>(environment.apiUrl + '/api/cats/' + id, {name: cat.name,
       price: cat.price,
       type: cat.type,
       createdDate: cat.createdDate,
       color: cat.color,
     });
   }
}
