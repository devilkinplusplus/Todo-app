import { Component } from '@angular/core';
import { TodoModel, TodoItem } from './todoModel';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  model = new TodoModel('Ilkin');
  isDisplay = false;

  getUser() {
    return this.model.user;
  }

  getItems() {
    return this.isDisplay == false
      ? this.model.items
      : this.model.items.filter((x) => !x.status);
  }

  addItem(item: string) {
    if (item != '') {
      this.model.items.push(new TodoItem(item, false));
    }
  }
}
