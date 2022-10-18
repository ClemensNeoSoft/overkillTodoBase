import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTodo } from 'src/app/store/selectors';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.scss']
})
export class DetailListComponent implements OnInit {

  todo$: any;

  constructor(private store: Store,
    private router: ActivatedRoute) {

    // Get params from uri
    this.router.params.subscribe((params: Params) => {

      // Subscribe
      this.store.select(selectTodo(params.id)).subscribe(data => {
        this.todo$ = data;
      });

    });
  }

  ngOnInit(): void {
  }
}
