import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TodoService} from '../todo/todo.service';
import { Todo } from '../todo/todo.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('characterEdit') characterEditTemplate;
  public message: string;
  public messageTab3: string;
  public todo;
  constructor( private todoService: TodoService) {}

  ngOnInit() {
    this.message = 'Hello';
    this.messageTab3 = 'konbanha';
    this.getTodos('high');
  }

  getTodos(filter:string){
    this.todoService.getTodos(filter).subscribe(data => {
      this.todo = data;
    },
    err => {
      console.log(err, 'error')
    },
    () => {console.log("done")}
    )
  }

  ngAfterViewInit() {
    console.log(this.characterEditTemplate, "characterEditTemplate");
  }
  
}