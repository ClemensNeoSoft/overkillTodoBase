import {Todo} from '../models/todo';
import {createReducer, on} from '@ngrx/store';
import {addTodo, dropDownTodo, editTodoCheckbox, loadTodosSuccess} from './actions';
import { state } from '@angular/animations';

export const featureKey = 'todosStore';

export interface State {
  todos: ReadonlyArray<Todo>;
}

export const initialState: State = {
  todos: [],
};

export const todosReducer = createReducer(
  initialState,
  on(
    loadTodosSuccess,
    (state, { todos }) => ({
      ...state,
      todos
    })
  ),
  on(
    editTodoCheckbox, (state, { todo }) => {
      
      let updatedTodo = state.todos.map(
        (t: Todo) => {
          if(t === todo) {
            let updateT = {
              ...todo,
              isClosed : !todo.isClosed
            }
            return updateT;
          }
          return t;
        }        
      )
      return {
        ...state,
        todos : updatedTodo
      }
      
    }
  ),
  on(
    dropDownTodo, (state) => {

      let updatedTodo : readonly Todo[] = state.todos.slice().sort(
        (t: Todo) => !t.isClosed ? -1 : 1 
      );
      return {
        ...state,
        todos : updatedTodo
      }
    }
  ),
  on(
    addTodo, (state, { title, description }) => {

      const newTodo: Todo = {
        title: title,
        isClosed: false,
        description: description
      }
      
      return {
        ...state,
        todos: [...state.todos, newTodo]
      }
    }
  )
);


