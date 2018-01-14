import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
//import all is big. for dev.
import 'rxjs/Rx';

// import 'rxjs/add/observable/interval';
// import { map } from 'rxjs/operator';

@Component({
  selector: 'app-message',
  template: `
    <h1>
      MESSAGE AREA
    </h1>
    <button (click)="click$.next()">  Update</button>
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
  click$ = new Subject();
  clock;

  constructor(store: Store<any>) {
    this.clock = store.select('clock')

    Observable.merge(
        this.click$.mapTo('hour'),
        Observable.interval(1000).mapTo('second')
    )
      .subscribe((type)=>{
         store.dispatch({type})
      })
}

  ngOnInit() {
  }

}
