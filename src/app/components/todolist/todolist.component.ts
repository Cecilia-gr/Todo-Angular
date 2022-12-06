import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Task } from 'src/app/class/task.model';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {
  public tasks : Task[] = [];
  private task$! : Observable<Task[]>;
  public subscribe! : Subscription |undefined;

  constructor(public todolistService: TodolistService) {}

  trackByFunction
    (index: number, item: any): string {
    return item.id;
  }

  ngOnInit() {
    this.task$ = this.todolistService.getTasks();
    this.getTasks();
  }

  getTasks(): void {
    this.subscribe = this.task$.subscribe(tasks =>{this.tasks = tasks});
  }

  ngOnDestroy() :void {
    this.subscribe?.unsubscribe();
  }

}
