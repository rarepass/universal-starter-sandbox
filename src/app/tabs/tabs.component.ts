import { 
  Component, 
  OnInit, 
  QueryList, 
  AfterContentInit,
  ContentChild, 
  ContentChildren 
} from '@angular/core';
import { TodoService} from '../todo/todo.service';

// import { ContentChild, ContentChildren } from '@angular/core/src/metadata/di';
import { TabComponent } from './tab.component';

@Component({
  selector: 'app-tabs',
  template: `
    <ul class="nav nav-tabs">
      <li *ngFor="let tab of tabs" 
        (click)="selectTab(tab)" 
        (click)="getTodos(tab.tabTitle)" 
        [class.active]="tab.active">
        <a href="#">{{tab.tabTitle}}</a>
      </li>
    </ul>
    <app-todo [todo]="todo"></app-todo>
    <ng-content></ng-content>
  `,
  styles: []
})
export class TabsComponent implements OnInit, AfterContentInit {
  /**
   * 子は取得結果としての返り値は QueryList と呼ばれる、
   * 配列に似た要素集合で取得するのが一般的です。
   * QueryListは、forEach メソッドでの繰り返し処理や、 
   * length プロパティによる要素数の取得が可能です。
   */
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  public todo;

  constructor( private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos('high');
  }  
  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    const activeTabs = this.tabs.filter(tab => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => (tab.active = false));

    // activate the tab the user has clicked on.
    tab.active = true;
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

}
