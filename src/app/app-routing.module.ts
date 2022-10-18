import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateListComponent } from './todo-list/create-list/create-list.component';
import { DetailListComponent } from './todo-list/detail-list/detail-list.component';
import {TodoListComponent} from './todo-list/todo-list.component';

const routes: Routes = [
  { path: '', component: TodoListComponent, pathMatch: 'full' },
  { path: 'todo/:id', component: DetailListComponent },
  { path: 'new-todo', component: CreateListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
