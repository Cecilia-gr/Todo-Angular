import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
 skills: FormArray;
 birthdate : FormControl;
 passwordForm : FormGroup;
 verifpassword : FormControl;
 password : FormControl;
 username : FormControl;


 static isOldEnough = (control : FormControl) => {
  // control est l'entrée de la date

  const birthDateplus18 = new Date(control.value);
  birthDateplus18.setFullYear(birthDateplus18.getFullYear() + 18);
  return birthDateplus18 < new Date() ? null: { tooYoung: true};
 }

  constructor(private fb : FormBuilder, private router: Router, private userservice : UserService){
    this.firstName = this.fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]);
    this.lastName = this.fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]);
    this.email = this.fb.control('', [Validators.required, Validators.email]);
    this.team = this.fb.control('', [Validators.required]);
    this.skills = this.fb.array(['']);
    this.birthdate = this.fb.control('', [Validators.required, UserFormComponent.isOldEnough]);
    this.password = this.fb.control('', [Validators.required]);
    this.verifpassword = this.fb.control('', [Validators.required]);
    this.username = this.fb.control('', [Validators.required]);
    this.passwordForm = this.fb.group({
      password : this.password,
      verifpassword : this.verifpassword
    });

    this.userForm = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      team: this.team,
      skills : this.skills,
      birthdate : this.birthdate,
      username : this.username,
      passwordForm : this.passwordForm,
    });
  }

  onInit(){

  }

  getSkills() {//FormArray
      return this.userForm.get('skills') //controls["skills"] as FormArray;
  }

  addSkill() {//FormArray
    this.skills.push(this.fb.control('', [Validators.required]))
  }

  removeSkill(index : number) {
    this.skills.removeAt(index);
  }


  onSubmit(userForm : FormGroup) :void{
    this.userservice.addUser(new User(userForm.value.firstName, userForm.value.lastName, userForm.value.email, userForm.value.team, userForm.value.skills));
    this.router.navigate(['userlist']);
  }



  trackByFunction
  (index: number, item: any): string {
  return item.id;
}

}
