import { Component } from '@angular/core';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {
  constructor(public todolistService: TodolistService) {
  }

  trackByFunction(index: number, item: any): string {
    return item.id;
  }


}
