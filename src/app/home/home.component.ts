import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('characterEdit') characterEditTemplate;
  public message: string;

  constructor() {}

  ngOnInit() {
    this.message = 'Hello';
  }

  ngAfterViewInit() {
    console.log(this.characterEditTemplate, "characterEditTemplate");
  }
}