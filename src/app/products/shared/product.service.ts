import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../../shared/service/authentication.service';
import {environment} from '../../../environments/environment';
import {Product} from '../../shared/models/product';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }


// Create
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>('https://localhost:46296/product', this.getProducts()); // check url
  }

// GetAllProducts
  getProducts(): Observable<Product[]> {
   //  return this.http.get<Product[]>('https://localhost:46296/product');
    // add authorization header with jwt token
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    // get users from api
    return this.http.get<Product[]>(environment.apiUrl + '/product/', httpOptions);
  }
}

