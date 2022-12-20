import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/class/task.model';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  // @Input() title!: string;

  constructor(private todo: TodolistService, private router: Router) {

   }

  onSumit(taskForm: NgForm){
    taskForm.value.completed = taskForm.value.completed == 1 ? true: false;
    this.todo.addTask(new Task(taskForm.value.title, taskForm.value.completed, taskForm.value.description, this.todo.nbTasks));//taskForm.value
    this.router.navigate(['todolist']);

  }
}
