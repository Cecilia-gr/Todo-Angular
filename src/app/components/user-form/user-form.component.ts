import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { AbstractControl, ControlContainer, Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user.model';
import { UserService } from 'src/app/services/user.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


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
 ageCtrl : FormControl;
 passwordForm : FormGroup;
 confirmpassword : FormControl;
 password : FormControl;
 usernameCrtl : FormControl;
 passwordStrength :number = 0;


//  static isOldEnough = (control : FormControl) => {
//   const birthDateplus18 = new Date(control.value);
//   birthDateplus18.setFullYear(birthDateplus18.getFullYear() + 18);
//   return birthDateplus18 < new Date() ? null: { tooYoung: true};
//  }

 static ageIsOk = (control : FormControl) => {
  return (control.value > 64 &&  control.value < 100 )? null: { AgeOk: true};
 }



static passwordMatch(group : FormGroup){
  const password = group.get('password')?.value;
  const confirm = group.get('confirm')?.value;
  return password === confirm ? null : {matchingError: true} ;
}

  constructor(private fb : FormBuilder, private router: Router, private userservice : UserService){
    this.firstName = this.fb.control('', {validators : [Validators.required, Validators.minLength(3), Validators.maxLength(20)], updateOn : 'blur'});
    this.lastName = this.fb.control('', {validators : [Validators.required, Validators.minLength(3), Validators.maxLength(20)], updateOn: 'blur'});
    this.email = this.fb.control('', {validators : [Validators.required, Validators.email], updateOn: 'blur'});
    this.team = this.fb.control('', [Validators.required]);
    this.skills = this.fb.array(['']);
    this.ageCtrl = this.fb.control('', [Validators.required, UserFormComponent.ageIsOk]);
    this.password = this.fb.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]);
    this.confirmpassword = this.fb.control('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]);
    this.usernameCrtl = this.fb.control('', [Validators.required, control => this.isUsernameAvialable(control)]);

    this.passwordForm = this.fb.group({
      password : this.password,
      confirm : this.confirmpassword
    }, {
      validators: UserFormComponent.passwordMatch,
    });

    this.userForm = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      team: this.team,
      skills : this.skills,
      age : this.ageCtrl,
      username : this.usernameCrtl,
      passwordForm : this.passwordForm,
    });

    this.password.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
      ).subscribe(newValue => this.passwordStrength = newValue.length);

  }

  ngonInit(){
    this.userservice.load();
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
    console.log(userForm.value.birthdate);


    this.userservice.addUser(new User(userForm.value.firstName, userForm.value.lastName, userForm.value.email, userForm.value.team, userForm.value.skills,userForm.value.username, userForm.value.password, userForm.value.age, this.userservice.addId()));
    this.router.navigate(['userlist']);
  }

  isUsernameAvialable(control : AbstractControl) {
    const username = control.value;
    return !this.userservice.isUsernameAvialable(username) ?  null : {alreadyUsed : true};
  }

  trackByFunction
  (index: number, item: any): string {
  return item.id;
}

}
