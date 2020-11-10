import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../shared/models/todoitem';
import {TodoItemService} from '../shared/service/todoitem.service';
import {AuthenticationService} from '../shared/service/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todoItems: TodoItem[] = [];
  username: string;
  errormessage: '';

  constructor(private todoItemService: TodoItemService, private authService: AuthenticationService) {
    this.username = authService.getUsername();
  }

  ngOnInit(): void {
    // get users from secure api end point
    this.todoItemService.getItems()
      .subscribe(
        items => {
          this.todoItems = items;
        },
        error => {
          this.errormessage = error.message;
        });
  }
}

