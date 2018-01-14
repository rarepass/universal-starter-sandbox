import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

//import all is big. for dev.
import 'rxjs/Rx';

// import 'rxjs/add/observable/interval';
// import { map } from 'rxjs/operator';

@Component({
  selector: 'app-message',
  template: `
    <h1>
      {{message}}
    </h1>
    <button (click)="click$.next()">  Update</button>
    {{clock$ | async | date:'EEEE, MMMM dd, y, hh:mm:ss a'}}

  `,
  styles: [`
    h1 {
      color: #ff0000;
    }
    `
  ]
})
export class MessageComponent implements OnInit {
  click$ = new Subject();
  clock$;

  private message = "message area";
  constructor() {
  
    this.clock$ = Observable.merge(
      this.click$.mapTo('hour'),
      Observable.interval(1000).mapTo('second')
    )
    .startWith(new Date())
    .scan((acc, curr) => {
      const date = new Date(acc.getTime());
      if(curr === 'second') {
        date.setSeconds(date.getSeconds() + 1)
      }
      if(curr === 'hour') {
        date.setHours(date.getHours() + 1)
      } 
      return date;
    });
  }

  ngOnInit() {
  }

}
