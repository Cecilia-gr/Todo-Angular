import { computeMsgId } from '@angular/compiler';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() name: string | undefined;
  @Input() complete: boolean | undefined;
  @Output() count = new EventEmitter<number>();




  constructor() {
    this.name = "Se lever";
    this.complete;
    this.count;
  }

  getComplete(): string {
    return this.complete ? "terminée" : "en cours";
  }

  getBadgeVariant(): string {
    return this.complete ? "d-inline float-end badge text-bg-success " : "d-inline float-end badge text-bg-warning";
  }

  getItemVariant(): string {
    return this.complete ? "list-group-item list-group-item-success" : "list-group-item list-group-item-warning";
  }

  toggleComplete(): void {

    this.complete ? this.count.emit(-1) : this.count.emit(1);

    this.complete = !this.complete;


  }
  // qui retourne « Terminer » si la tâche est en
  // cours et « Annuler » si la tâche est terminée et qui doit
  // s’interpoler dans le texte du bouton.
  getButtonText(): string {
    if (this.getComplete() == "terminée") {
      return "Annuler";
    } else {
      return "Terminer";
    }
  }
}
