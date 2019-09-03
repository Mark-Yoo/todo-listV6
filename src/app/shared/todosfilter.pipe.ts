import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../core/models/todo.interface';
import { navItem } from '../core/models/navitem.type';

@Pipe({
  name: 'todosfilter'
})
export class TodosfilterPipe implements PipeTransform {

  transform(todos: Todo[], navStatus: navItem): Todo[] {
    console.log(todos);
    return todos.filter(todo => {
      if (navStatus === 'Active') { return !todo.completed };
      if (navStatus === 'Completed') { return todo.completed };
      return true;
    })
  }

}
