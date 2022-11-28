import { computeMsgId } from '@angular/compiler';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/class/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Output() count = new EventEmitter<number>();
  @Input() task!: Task ;

  constructor() {
    this.count;
  }

  getComplete(): string {
    return this.task.complete ? "terminée" : "en cours";
  }

  getBadgeVariant(): string {
    return this.task.complete ? "d-inline float-end badge text-bg-success " : "d-inline float-end badge text-bg-warning";
  }

  getItemVariant(): string {
    return this.task.complete ? "list-group-item list-group-item-success" : "list-group-item list-group-item-warning";
  }

  toggleComplete(): void {

    this.task.complete ? this.count.emit(-1) : this.count.emit(1);

    this.task.complete = !this.task.complete;


  }

  getButtonText(): string {
    if (this.getComplete() == "terminée") {
      return "Annuler";
    } else {
      return "Terminer";
    }
  }

}
