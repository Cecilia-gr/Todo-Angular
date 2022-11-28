import { Injectable } from '@angular/core';
import { Task } from '../class/task.model';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  public tasks: Task[];


  constructor() {

    this.tasks = [
      new Task(1, "Se lever", true, "Lorem ipsum dolor sit amet consectetur adipisicing elit."),
      new Task(2, "S'étirer ", false, "Lorem ipsum dolor sit amet consectetur adipisicing elit."),
      new Task(3, "Raller ", false, "Lorem ipsum dolor sit amet consectetur adipisicing elit.")
    ]

  }
}
