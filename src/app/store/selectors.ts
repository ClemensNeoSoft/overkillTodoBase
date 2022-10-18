import {createFeatureSelector, createSelector} from '@ngrx/store';
import { Todo } from '../models/todo';
import {featureKey, State} from './reducer';

export const getState = createFeatureSelector<State>(featureKey);

export const selectTodos = createSelector(
  getState,
  (state: State) => state.todos,
);

export const selectTodo = (id: number) => 
  createSelector(
    selectTodos, 
    (todos : readonly Todo[]) => todos[id]);
