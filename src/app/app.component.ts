import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  todos = ['clean the kitchen', 'iron clothes', 'wash dishes'];
  clickme (inputName: string) {
    alert('My name is ' + inputName)
  }
}