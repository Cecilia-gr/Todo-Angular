import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/class/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  public users : User[] = [];
  private user$! : Observable<User[]>;
  public subscribe! : Subscription |undefined;

  constructor(public userservice: UserService) {
  }

  trackByFunction
    (index: number, item: any): string {
    return item.id;
  }

  ngOnInit() {
    this.subscribe = this.user$.subscribe(user =>{this.users = user});
  }

  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }



}
