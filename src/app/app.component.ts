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
  public pct: number;


  constructor() {
    this.tasks = [
      new Task(1, "Se lever", true, "Lorem ipsum dolor sit amet consectetur adipisicing elit. "),
      new Task(2, "S'étirer ", false, "Lorem ipsum dolor sit amet consectetur adipisicing elit. "),
      new Task(3, "Raller ", false, "Lorem ipsum dolor sit amet consectetur adipisicing elit. ")
    ]

    this.count = 0;
    this.pct = 0;
  }

  setCount(n: number) {
    this.count += n;
    this.pct = Math.floor(this.count / this.tasks.length * 100);


  }

  ngOnInit(tasks: Array<Task> = this.tasks): void {

    for (const t of tasks) {
      t.complete ? this.count += 1 : this.count;
    }

    this.pct = Math.floor(this.count / tasks.length * 100);

  }

  trackByFunction(index: number, item: any): string {
    return item.id;
  }


}
