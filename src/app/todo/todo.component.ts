import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  template: `
    <table class="table table-striped">
      <thead>
        <th>detail</th>
        <th></th>
      </thead>
      <tbody>
        <tr *ngFor="let p of todo">
          <td>{{ p.detail }}</td>
          <td><button class="btn btn-sm btn-default" (click)="editTodo.emit(p)">Edit</button></td>
        </tr>
      </tbody>
    </table>
    <!-- <button class="btn btn-default" (click)="addPerson.emit()">Add new person</button> -->
  `,
  styles: []
})
export class TodoComponent implements OnInit {

  @Input() todo;
  @Output() editTodo = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

}
