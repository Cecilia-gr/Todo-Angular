import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskdetailsComponent } from './components/taskdetails/taskdetails.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: '', component: TodolistComponent, pathMatch: 'full' },
      { path: 'todolist/:id', component: TaskdetailsComponent },
      { path: 'todolist', component: TodolistComponent, pathMatch: 'full' },
      { path: 'taskform', component: TaskFormComponent},
      { path: 'userlist', component: UserListComponent}


    ]
  },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
