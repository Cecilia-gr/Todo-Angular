import { computeMsgId } from '@angular/compiler';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/class/task.model';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Output() count = new EventEmitter<number>();
  @Input() task!: Task ;
  @Input() id!: number;

  constructor(public todoListService : TodolistService) {
    this.count;
  }

  getComplete(): string {
    return this.task.completed ? "terminée" : "en cours";
  }

  getBadgeVariant(): string {
    return this.task.completed ? "d-inline float-end badge text-bg-success " : "d-inline float-end badge text-bg-warning";
  }

  getItemVariant(): string {
    return this.task.completed ? "list-group-item list-group-item-success" : "list-group-item list-group-item-warning";
  }

  // toggleComplete(): void {

  //   this.task.completed ? this.count.emit(-1) : this.count.emit(1);

  //   this.task.completed = !this.task.completed;
  // }

  getButtonText(): string {
    if (this.getComplete() == "terminée") {
      return "Annuler";
    } else {
      return "Terminer";
    }
  }

}
