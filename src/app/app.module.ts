import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { TaskdetailsComponent } from './components/taskdetails/taskdetails.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
// import { TodolistService } from './services/todolist.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TodolistComponent,
    NavComponent,
    LoginComponent,
    LogoutComponent,
    TaskdetailsComponent,
    NotfoundComponent,
    TaskFormComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBadgeModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
