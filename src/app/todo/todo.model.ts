type priority = 'high' | 'middle' | 'low';
/*
export interface Todo {
    detail:string;
    done: boolean;
    priority: priority;
}
*/

export class Todo {
    public detail:string;
    public done: boolean;
    public priority: priority;
  
    constructor(detail: string, done: boolean, priority: priority) {
      this.detail = detail;
      this.done = done;
      this.priority = priority;
    }
  }
  