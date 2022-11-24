import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';

  public name1: string;
  public name2: string;
  public name3: string;

  public complete1: boolean;
  public complete2: boolean;
  public complete3: boolean;

  count : number;


  constructor() {
    this.name1 = "Jean";
    this.complete1=false;
    this.name2 = "Marie";
    this.complete2=false;
    this.name3 = "Gertrude";
    this.complete3=false;
    this.count = 0;
  }

  setCount(n : number ) {
    this.count += n;
  }

}
