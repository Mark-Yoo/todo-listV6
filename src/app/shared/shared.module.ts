import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosfilterPipe } from './todosfilter.pipe';

@NgModule({
  declarations: [
    TodosfilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodosfilterPipe
  ]
})
export class SharedModule { }
