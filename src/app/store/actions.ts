import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo';

export const loadTodos = createAction('[Todos] Load todos');

export const loadTodosSuccess = createAction(
  '[Todos] Load todos success',
  props<{ todos: Todo[] }>()
);
export const loadTodosFailed = createAction('[Todos] Load todos failed');

export const addTodo = createAction(
  '[Todos] Add a new todo',
  props<{ title: string, description: string }>()
  );
export const editTodoCheckbox = createAction(
  '[Todos] Edit checkbox',
  props<{ todo: Todo }>()
);
export const dropDownTodo = createAction('[Todos] Drop down Todos')


