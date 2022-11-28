export class Task {
id:number;
title : string;
complete : boolean;
description : string;
created : string;

  constructor(id : number=0, title:string="", complete:boolean=true, description:string="") {
    this.id = id;
    this.title = title;
    this.complete = complete;
    this.description = description;
    this.created = Date();
  }
}
