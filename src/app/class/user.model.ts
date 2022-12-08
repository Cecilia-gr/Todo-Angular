export class User {
  firstName: string;
  lastName: string;
  email: string;
  team: string;
  skills: string[];

  constructor(firstName: string = "", lastName: string = "", email: string = "", team: string = "", skills: string[] = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.team = team;
    this.skills = skills;
  }
}
