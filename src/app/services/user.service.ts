import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, isEmpty, Observable } from 'rxjs';
import { User } from '../class/user.model';

const initialList : User[] = [
  new User("Marie", "Dubois", "m.dubois@mail.com", "Bleu", ["manger", "dormir"], "m.dubois", "azerty", 20),
  new User("Paul", "Jean", "p.jean@mail.com", "Bleu", [], "pjean", "azerty", 25)

];


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[];
  private _users: BehaviorSubject<User[]>;
  readonly users$: Observable<User[]>;

  constructor(public router: Router) {
    this.users = [];
    this._users = new BehaviorSubject<User[]>([]);
    this.users$ = this._users.asObservable();
    this.init();
  }

  private init(): void {
    this.users = initialList;
    this.emiter(this.users);
  }

  private emiter(users: User[]): void {
    this._users.next(Object.assign([], users));
  }

  public getUsers$(): Observable<User[]> {
    return this.users$;
  }

  public addUser(user: User): void {
    console.log(user);

    this.users.push(user);
    this.emiter(this.users);
    this.router.navigate(['userlist']);
  }

  public isUsernameAvialable (username : string) :boolean{
    let collection = this.users.filter( user => user.username == username)
    return collection.length > 0 ? true : false;
  }

}
