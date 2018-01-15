import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { ClockComponent } from './clock.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  // モジュールの中で宣言されているディレクティブとパイプを登録する場所です。
  declarations: [MessageComponent, ClockComponent],
  // モジュールがimportsに設定された時に提供するディレクティブとパイプを指定します。
  exports: [MessageComponent]

})
export class MessageModule { }
