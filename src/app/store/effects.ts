import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { loadTodos, loadTodosFailed, loadTodosSuccess } from './actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TodoService } from '../services/todo.service';
import { Action } from '@ngrx/store';

@Injectable()
export class Effects implements OnInitEffects{
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      //filter(action => action.type === loadTodos.type)
      mergeMap(() =>
        this.todoService.list().pipe(
          map((todos) => loadTodosSuccess({ todos })),
          catchError(() => [loadTodosFailed()])
        )
      )
    )
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}

  // Call loadTodos() at the launching of the application
  ngrxOnInitEffects(): Action {
    return loadTodos();
  }
}
