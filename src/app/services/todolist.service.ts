import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Task } from '../class/task.model';

// const initialList = [
//   new Task("Se lever", true, "Lorem ipsum dolor sit amet consectetur adipisicing elit."),
//   new Task("S'étirer ", false, "Lorem ipsum dolor sit amet consectetur adipisicing elit."),
//   new Task("Raller ", false, "Lorem ipsum dolor sit amet consectetur adipisicing elit.")
// ];

// const toDoListSubject = new Subject();

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  private tasks: Task[];
  private _task: BehaviorSubject<Task[]>;
  private readonly task$: Observable<Task[]>;
  public prom!: Promise<string>;

  constructor(private http : HttpClient) {
    this.tasks = [];
    this._task = new BehaviorSubject<Task[]>(this.tasks);
    this.task$ = this._task.asObservable();
    // this.prom = new Promise<string>((resolve) => {
    //   // setTimeout(() => {
    //     this.tasks = initialList;
    //     this.emiter(this.tasks);
    //     resolve('fini');
    //   // }, 1000)
    // })

  }

  get nbTasks(): number {
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


  toggleComplete(id: number): void {
    this.tasks[id].completed = !this.tasks[id].completed;
    this.save();
  }

  getTaskById(id: number): Task | null {
    return this.tasks.filter(task => task.id == id)[0];//récupér une liste de trask ayant comme "id" comme id, liste d'1 seul item , ici
  }

  getTasks(): Observable<Task[]> {
    return this.task$;
  }

  emiter(tasks: Task[] = this.tasks): void {
    this._task.next(Object.assign([], tasks))
  }

  addTask(task: Task) {
    console.log(task);

    this.tasks.push(task);
    this.emiter(this.tasks);
    console.log(this.tasks);

    this.save();
  }

  save () {
    this.http.put( 'https://todo-aeb69-default-rtdb.europe-west1.firebasedatabase.app' +'/tasks.json', this.tasks)
    .subscribe();
  }

  // modifTask() {
  //   this.save();
  // }

  load () {
    this.http.get('https://todo-aeb69-default-rtdb.europe-west1.firebasedatabase.app/tasks.json')
    .subscribe((response : any) => {
      this._task.next(Object.assign(this.tasks, response))
    });

  }

}
