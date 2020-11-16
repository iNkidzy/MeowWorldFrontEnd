import { Component } from '@angular/core';
import {User} from './shared/models/user';
import {Router} from '@angular/router';
import {AuthenticationService} from './shared/service/authentication.service';
import {Role} from './shared/models/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome to Meow World';
 // currentUser: User;
  constructor(
 //   private router: Router,
 //   private authenticationService: AuthenticationService
  ) {
   // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

//  get isAdmin() {
 //   return this.currentUser && this.currentUser.role === Role.Admin;
 // }

 // logout() {
 //   this.authenticationService.logout();
 //   this.router.navigate(['/login']);
 // }
}
 // showButton1 = true;
 // buttons = ['A1', 'A2', 'A3', 'Cat'];

    // changeTitle() {
   //  this.title = 'cats';
 //   }
  // showFirstButton() {
  //   this.showButton1 = !this.showButton1;
  //  }
// }
