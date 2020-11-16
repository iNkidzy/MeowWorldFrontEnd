import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {Role} from '../models/role';
import {Product} from '../models/product';
import {Cat} from '../../cats/Shared/cat.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
   currentUser: Product;
   currentAdmin: Cat;
  constructor() { }

  ngOnInit(): void {
  }
  get isAdmin(): any {
 // return this.currentUser && this.currentUser.role === Role.Admin;
    return this.currentAdmin;
  }
}
