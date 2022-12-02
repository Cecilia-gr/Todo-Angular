import { computeMsgId } from '@angular/compiler';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/class/task.model';
import { TodolistService } from 'src/app/services/todolist.service';
import { TaskdetailsComponent } from '../taskdetails/taskdetails.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task!: Task;

  constructor(public todolistService: TodolistService,) {}

  getComplete(): string {
    return this.task.completed ? "terminée" : "en cours";
  }

  getBadgeVariant(): string {
    return this.task.completed ? "d-inline float-end badge text-bg-success " : "d-inline float-end badge text-bg-warning";
  }

  getItemVariant(): string {
    return this.task.completed ? "list-group-item list-group-item-success" : "list-group-item list-group-item-warning";
  }

  toggleComplete(): void {
    this.todolistService.toggleComplete(this.task.id);
  }

  getButtonText(): string {
    if (this.getComplete() == "terminée") {
      return "Annuler";
    } else {
      return "Terminer";
    }
  }

}
