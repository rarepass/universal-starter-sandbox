import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import { HOUR, SECOND, ADVANCE, RECALL } from './message.reducer';
//import all is big. for dev.
import 'rxjs/Rx';
import { HOST_ATTR } from '@angular/platform-browser/src/dom/dom_renderer';

// import 'rxjs/add/observable/interval';
// import { map } from 'rxjs/operator';

@Component({
  selector: 'app-message',
  template: `
    <h1>
      MESSAGE AREA
    </h1>
    <input #inputNum type="number" value="0">
    <button (click)="click$.next(inputNum.value)">  Update</button>
    <app-clock [time]="time | async"></app-clock>
    <div (click)="person$.next(person)" *ngFor="let person of people | async">
      {{person.name}} is {{person.time | date:'hhmmss'}}
    </div>
    <button (click)="recall$.next()">Recall</button>
  `,
  styles: [`
    h1 {
      color: #ff0000;
    }
    `
  ]
})

export class MessageComponent implements OnInit {

  click$ = new Subject<string>()
    // have to wrap that in ();
    // we want it to be a object;
    .map( (value) => ({ type:HOUR, payload:parseInt(value)}));

    person$ = new Subject<string>()
    .map( (value) => ({ type:ADVANCE, payload:value}));

    recall$ = new Subject();

    seconds$ = Observable
    .interval(1000)
    .mapTo({type:SECOND, payload: 1});

  time;
  people;

  constructor(store: Store<any>) {
    this.time = store.select('clock');
    this.people = store.select('people');

    Observable.merge(
      this.click$,
      this.seconds$,
      this.person$,
      // this.timeは7行上のthis.time.
      // _: recall$
      // y: this.time
      this.recall$.withLatestFrom(this.time, (_, y) =>y)
        .map((time) => ({type:RECALL, payload:time}))
    )
      .subscribe(store.dispatch.bind(store))
}

  ngOnInit() {
  }

}
