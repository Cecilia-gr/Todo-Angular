import { Component, Output } from '@angular/core';
// import { Task } from './class/task.model';
import { TodolistService } from './services/todolist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodolistService]
})
export class AppComponent {
  title = 'todo';

  // public tasks: any[];
  // tasks: import("./class/task.model").Task[];
  // public tasks : Task[];

  count: number;
  public pct: number;


  constructor(public todolistService: TodolistService) {
    // this.tasks = [
    //   new Task(1, "Se lever", true, "Lorem ipsum dolor sit amet consectetur adipisicing elit."),
    //   new Task(2, "S'étirer ", false, "Lorem ipsum dolor sit amet consectetur adipisicing elit."),
    //   new Task(3, "Raller ", false, "Lorem ipsum dolor sit amet consectetur adipisicing elit.")
    // ]
    // this.tasks = todolistService.tasks;
    this.count = 0;
    this.pct = 0;
  }

  setCount(n: number) {
    this.count += n;
    if (this.todolistService.tasks.length > 0)
      this.pct = Math.floor(this.count / this.todolistService.tasks.length * 100);


  }

  ngOnInit(): void {
    for (const t of this.todolistService.tasks) {
      t.complete ? this.count += 1 : this.count;
    }

    if (this.todolistService.tasks.length > 0)
      this.pct = Math.floor(this.count / this.todolistService.tasks.length * 100);
  }

  trackByFunction(index: number, item: any): string {
    return item.id;
  }


}
