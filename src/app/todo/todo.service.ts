import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
      new Todo(
        'running in park',
        false,
        'high'
      ),
      new Todo(
        'cooking dinner',
        false,
        'middle'
      ),
      new Todo(
        'sale books',
        false,
        'low'
      ),
      new Todo(
        'sale pc',
        false,
        'low'
      ),

  ]

  private todos$: Observable<Array<Todo>>;

  constructor() {}

  getTodos(filter) {
      return Observable
      .from(this.todos)
      .filter(todo => todo.priority === filter)
      .do(console.log)
      .toArray()
      .do(console.log);
    }
}
