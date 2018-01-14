import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  // モジュールの中で宣言されているディレクティブとパイプを登録する場所です。
  declarations: [MessageComponent],
  // モジュールがimportsに設定された時に提供するディレクティブとパイプを指定します。
  exports: [MessageComponent]

})
export class MessageModule { }
