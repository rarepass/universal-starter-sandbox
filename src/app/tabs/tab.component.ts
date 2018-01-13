import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  styles: [
    `
    .pane{
      padding: 1em;
    }
  `
  ],
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})
export class TabComponent implements OnInit {

  @Input() tabTitle: string;
  @Input() active = false;

  constructor() { }

  ngOnInit() {
  }

}
