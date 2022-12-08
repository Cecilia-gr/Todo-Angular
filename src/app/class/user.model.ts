export class User {
  firstName: string;
  lastName: string;
  email: string;
  team: string;
  skills: string[];
  id :number;
  private static index :number = 0;


  constructor(firstName: string = "", lastName: string = "", email: string = "", team: string = "", skills: string[] = []) {
    this.id = User.index++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.team = team;
    this.skills = skills;
  }
}
