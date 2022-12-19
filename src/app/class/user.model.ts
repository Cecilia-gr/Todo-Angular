export class User {
  firstName: string;
  lastName: string;
  email: string;
  team: string;
  skills: string[];
  id :number;
  private static index :number = 0;
  age : number;
  password : string;
  username : string;


  constructor(firstName: string = "", lastName: string = "", email: string = "", team: string = "", skills: string[] = [], username : string = "", password : string = "", age : number = 0) {
    this.id = User.index++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.team = team;
    this.skills = skills;
    this.username = username;
    this.password = password;
    this.age = age;

  }
}
