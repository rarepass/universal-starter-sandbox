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
      <ng-content *ngIf="!template"></ng-content>
      <ng-container *ngIf="template"
      [ngTemplateOutlet]="template"></ng-container>
    </div>
  `
})
export class TabComponent implements OnInit {

  @Input() tabTitle: string;
  @Input() active = false;
  @Input() template;

  constructor() { }

  ngOnInit() {
  }

}
