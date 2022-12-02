import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TaskdetailsComponent } from './components/taskdetails/taskdetails.component';
import { TodolistComponent } from './components/todolist/todolist.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'todolist/:id', component:TaskdetailsComponent},
  {path:'todolist', component:TodolistComponent},
  {path:'404', component:NotfoundComponent},
  {path:'**', redirectTo: '/404'},
  {path:'', component:TodolistComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
