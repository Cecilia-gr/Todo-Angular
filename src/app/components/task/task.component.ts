import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  public name : string ;
  public complete : boolean ;

  constructor(){
    this.name = "Se lever";
    this.complete = true;
  }

  getComplete() :string{
    return this.complete ? "terminée" : "en cours";
  }

  getBadgeVariant() : string{
    return this.complete? "d-inline float-right badge badge-success": "d-inline float-right badge badge-warning";
  }

  getItemVariant() :string{
    return this.complete? "list-group-item list-group-item-success": "list-group-item list-group-item-warning";
  }

  toggleComplete() :void{
    this.complete = this.complete ? false : true ;
  }
  // qui retourne « Terminer » si la tâche est en
  // cours et « Annuler » si la tâche est terminée et qui doit
  // s’interpoler dans le texte du bouton.
  getButtonText() :string{
    if (this.getComplete() == "termineée") {
      return "Annuler";
    }else{
      return "Terminer";
    }
  }
}
