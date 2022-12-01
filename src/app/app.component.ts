import { Component, Output } from '@angular/core';
import { TodolistService } from './services/todolist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [TodolistService]
})
export class AppComponent {
  title = 'todo';
  
  constructor(public todolistService: TodolistService) {
  }

  trackByFunction(index: number, item: any): string {
    return item.id;
  }

}
