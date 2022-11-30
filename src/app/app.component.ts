import { Component, Output } from '@angular/core';
import { Task } from './class/task.model';
import { TodolistService } from './services/todolist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [TodolistService]
})
export class AppComponent {
  title = 'todo';

  count: number;
  public pct: number;
  // public prom!: Promise<String>;


  constructor(public todolistService: TodolistService) {
    this.count = 0;
    this.pct = 0;

    // this.prom = new Promise(() =>
    //   setTimeout(() => {
    //     console.log('test');

    //   }, 1000)
    // )
  }

  // setCount(n: number) {
  //   this.count += n;
  // }

  get nbTasks() :number{
    let val = this.todolistService.tasks.length;
    return val;
  }

  get pourcent(): number {
    let val = this.todolistService.tasks.length != 0 ? Math.floor(this.tasksTrue / this.nbTasks * 100) : 0;
    console.log(val);
    return val;
  }


  get tasksTrue(): number {
    let val = (this.todolistService.tasks?.length) ? this.todolistService.tasks.filter((task) => task.completed).length : 0;
    return val;
  }

  trackByFunction(index: number, item: any): string {
    return item.id;
  }

}
