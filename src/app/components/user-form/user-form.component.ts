import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
 userForm! : FormGroup;
 firstName: FormControl;
 lastName: FormControl;
 email: FormControl;
 team: FormControl;
 skills!: FormControl;

  constructor(private fb : FormBuilder, private router: Router, private userservice : UserService){
    this.firstName = this.fb.control('', [Validators.required, Validators.minLength(3)]);
    this.lastName = this.fb.control('', [Validators.required, Validators.minLength(3)]);
    this.email = this.fb.control('', [Validators.required, Validators.email]);
    this.team = this.fb.control('', [Validators.required]);
    this.userForm = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      team: this.team
    });
  }

  onInit(){

  }

  onSumit(userForm : FormGroup){//userForm: NgForm
    console.log(userForm.value);
    this.userservice.addUser(new User(userForm.value.firstName, userForm.value.lastName, userForm.value.email, userForm.value.team));
    this.router.navigate(['login']);
  }
}
