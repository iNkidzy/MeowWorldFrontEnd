import { Component, OnInit } from '@angular/core';
import {Product} from '../shared/models/product';
import {AuthenticationService} from '../shared/service/authentication.service';
import {Cat} from '../cats/Shared/cat.model';
import {CatService} from '../cats/Shared/cat.service';
import {User} from '../shared/models/user';
import {UserService} from '../shared/service/user.service';
import {first} from 'rxjs/operators';
import {ProductService} from '../products/shared/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Products: Product[] = [];
  Cats: Cat[] = [];
  // use curentuser and userfromapi only after backend is done
  // currentUser: User;
  // userFromApi: User;
  username: string;
  errormessage: '';
  constructor( private productService: ProductService,
              /* private userService: UserService private catService: CatService, */
               private authService: AuthenticationService) {
    this.username = authService.getUsername();
    // this.currentUser = this.authService.currentUserValue;
  }

  ngOnInit(): void {
    // this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
    // this.userFromApi = user;
    // });
    // get users from secure api end point
   // if (this.username = 'admin') {
   //   this.catService.getCats()
   //     .subscribe(
    //      cats => {
  //          this.Cats = cats;
  //        },
  //        error => {
  //          this.errormessage = error.message;
  //        });
  //  } else if (this.username = 'user') {
      this.productService.getProducts()
        .subscribe(
          products => {
            this.Products = products;
          },
          error => {
            this.errormessage = error.message;
          });
    }
  }
