import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {Todo} from '../../models/todo';
import {addTodo} from '../../store/actions';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent implements OnInit {

  /** FormGroup */
  addNewTodoForm!: FormGroup;

  isAdded: boolean = false

  constructor(private formBuilder: FormBuilder,
    private store: Store) { }

  ngOnInit(): void {
    /** Init Form */
    this.initForm();
  }

  /** Init Form */
  initForm() {
    this.addNewTodoForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [])
    });
  }

  /** Submit */
  onSubmitForm() {

    // Get value
    let title = this.addNewTodoForm.value['title'].toLowerCase().trim();
    let description = this.addNewTodoForm.value['description'];

    // Call Action
    this.store.dispatch(addTodo({ title, description }))
    this.isAdded = true;

    // Remove message
    setTimeout(() => {
      this.isAdded = false;
    }, 3000);
  }

}
