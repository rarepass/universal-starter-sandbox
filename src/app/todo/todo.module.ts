import { TodoService } from './todo.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [TodoComponent],
  providers: [TodoService],
  exports: [TodoComponent]
})
export class TodoModule {}
