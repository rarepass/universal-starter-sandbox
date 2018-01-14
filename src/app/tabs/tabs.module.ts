import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoModule } from '../todo/todo.module';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';

@NgModule({
  imports: [
    CommonModule,
    TodoModule,
  ],
  // モジュールの中で宣言されているディレクティブとパイプを登録する場所です。
  declarations: [TabsComponent, TabComponent],
  // モジュールがimportsに設定された時に提供するディレクティブとパイプを指定します。
  exports: [TabsComponent, TabComponent]

})
export class TabsModule { }
