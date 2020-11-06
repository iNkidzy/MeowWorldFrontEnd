import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome to Meow World';
  showButton1 = true;
  buttons = ['A1', 'A2', 'A3', 'Cat'];

  changeTitle() {
    this.title = 'cats';
  }
  showFirstButton() {
    this.showButton1 = !this.showButton1;
  }
}
