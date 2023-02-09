export class TodoModel{
    user : string;
    items : any[];
    constructor(user:string){
      this.user = user;
      this.items = [
            new TodoItem("Sports",false),
            new TodoItem("Code",true),
            new TodoItem("Rest",false),
            new TodoItem("Tutorials",true),
      ];
    }
}

export class TodoItem{
    activity:string;
    status:boolean;
    constructor(activity:string,status:boolean){
      this.activity = activity;
      this.status = status;
    }
}
