import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Todo} from '../models/todo';
import {Store} from '@ngrx/store';
import {selectTodos} from '../store/selectors';
import {dropDownTodo, editTodoCheckbox, loadTodos} from '../store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos$: Observable<ReadonlyArray<Todo>>;

  constructor(private store: Store,
    private router: Router) {
    this.todos$ = this.store.select(selectTodos);
  }

  ngOnInit(): void {
  }

  // Call action to edit
  // Call action to crossed out the todo checked
  editCheckbox(todo: Todo) {
    this.store.dispatch(editTodoCheckbox({ todo }));
    this.store.dispatch(dropDownTodo());
  }

  // Navigate to Detail
  selectTodoDetail(index: number) {
    this.router.navigate(['/todo', index]);
  }

  // Navigate to new todo
  addNewTodo() {
    this.router.navigate(['/new-todo']);
  }

}
