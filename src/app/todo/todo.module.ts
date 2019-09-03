import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoContainerComponent } from './todo-container.component';
import { TodoFormComponent } from './todo-form.component';
import { TodoListComponent } from './todo-list.component';
import { TodoFooterComponent } from './todo-footer.component'
import { TodoNavComponent } from './todo-nav.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TodoContainerComponent,
    TodoFooterComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoNavComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TodoContainerComponent,
    TodoFooterComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoNavComponent
  ]
})
export class TodoModule { }
