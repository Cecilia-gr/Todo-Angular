import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Task } from 'src/app/class/task.model';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.scss']
})
export class TaskdetailsComponent {


  constructor(
    public todo : TodolistService,
    public route : ActivatedRoute,
    public task :Task
  ){}

  ngOnnit() {
     this.route.queryParamMap.subscribe((params: ParamMap) =>{
     let id  = Number(params.get('id'));
     this.task = this.todo.getTaskById(id);
     })
  }
}
