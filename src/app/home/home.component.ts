import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../todo/todo.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('characterEdit') characterEditTemplate;
  public message: string;
  public messageDataContext: string;
  constructor() {}

  ngOnInit() {
    this.messageDataContext = 'messageDataContext message';
  }


  ngAfterViewInit() {
    console.log(this.characterEditTemplate, "characterEditTemplate");
  }
  
}