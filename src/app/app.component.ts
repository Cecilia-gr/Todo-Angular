import { Component, Output } from '@angular/core';
import { Task } from './class/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';

  public tasks: Task[];
  count: number;


  constructor() {
    this.tasks = [
      new Task(1, "test1", true, "testest1"),
      new Task(2, "test2", false, "testest2"),
      new Task(3, "test3", false, "testest3")
    ]

    this.count = 0;
  }

  setCount(n: number) {
    this.count += n;
  }

  ngOnInit (tasks:Array<Task> = this.tasks) : void{

    for (const t of tasks) {
      t.complete? this.count+=1: this.count;
    }
  }

  trackByFunction(index: number, item: any): string {
    return item.id;
    }


}
