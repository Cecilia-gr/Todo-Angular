export class Task {
id:number;
title : string;
completed : boolean;
description : string;
created : string;
private static index :number = 0;

  constructor(title:string="", completed:boolean=true, description:string="", id : number) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.description = description;
    this.created = Date();
  }
}
