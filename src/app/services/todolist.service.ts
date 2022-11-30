import { Injectable } from '@angular/core';
import { Task } from '../class/task.model';

const initialList = [
  new Task(1, "Se lever", true, "Lorem ipsum dolor sit amet consectetur adipisicing elit."),
  new Task(2, "S'étirer ", false, "Lorem ipsum dolor sit amet consectetur adipisicing elit."),
  new Task(3, "Raller ", false, "Lorem ipsum dolor sit amet consectetur adipisicing elit.")
];


@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  public tasks: Task[];


  constructor() {
    this.tasks = [];
    this.updateList(initialList)
  }

  async updateList(list: Task[]): Promise<void> {
    this.tasks = await new Promise<Task[]>(() => {
      setTimeout(() => {
        this.tasks = list;
      }, 1000)
      // return "test";
    })
  }

  //   this.prom = new Promise(() =>
  //   setTimeout(() => {
  //     console.log('test');

  //   }, 1000)
  // )

  toggleComplete(id :number): void {

    // this.task.complete ? this.count.emit(-1) : this.count.emit(1);

    this.tasks[id].completed = !this.tasks[id].completed;


  }

}
