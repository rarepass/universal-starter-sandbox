import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import { HOUR, SECOND } from './message.reducer';
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
    <h1>{{clock | async | date:'medium'}}</h1>

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

    seconds$ = Observable
    .interval(1000)
    .mapTo({type:SECOND, payload: 1});

  clock;

  constructor(store: Store<any>) {
    this.clock = store.select('clock')

    Observable.merge(
      this.click$,
      this.seconds$
    )
      .subscribe(store.dispatch.bind(store))
}

  ngOnInit() {
  }

}
