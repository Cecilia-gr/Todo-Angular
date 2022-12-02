import { Injectable } from '@angular/core';
import { Task } from '../class/task.model';

const initialList = [
  new Task("Se lever", true, "Lorem ipsum dolor sit amet consectetur adipisicing elit."),
  new Task("S'étirer ", false, "Lorem ipsum dolor sit amet consectetur adipisicing elit."),
  new Task("Raller ", false, "Lorem ipsum dolor sit amet consectetur adipisicing elit.")
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
    })
  }
  
  get nbTasks() :number{
    let val = this.tasks.length;
    return val;
  }

  get pourcent(): number {
    let val = this.tasks.length != 0 ? Math.floor(this.tasksTrue / this.nbTasks * 100) : 0;
    return val;
  }


  get tasksTrue(): number {
    let val = (this.tasks?.length) ? this.tasks.filter((task) => task.completed).length : 0;
    return val;
  }


  toggleComplete(id :number): void {
    this.tasks[id].completed = !this.tasks[id].completed;
  }

  getTaskById(id: number): Task{
    return this.tasks[id]
  }

}
