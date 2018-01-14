import { Component, Input, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';

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
      [ngTemplateOutlet]="template"
      [ngTemplateOutletContext]="{ data: dataContext }"
      ></ng-container>
    </div>
  `
})
export class TabComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @Input() tabTitle: string;
  @Input() active = false;
  @Input() template;
  @Input() dataContext;

  constructor() { }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }  
  ngAfterViewChecked(){
    console.log("AfterViewChecked")
  }
  testClick(val:string){
    console.log("test" + val);
  }

}
