import { TodoService } from '../service/todo.service';
import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../actions';
import { IAppState } from '../store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @select() todos;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private service: TodoService) {
  }

  ngOnInit(): void {
    this.service.loadTodos();
  }

  addTodo(input) {
    if (!input.value) {
      return;
    }

    // this.ngRedux.dispatch({ type: ADD_TODO, title: input.value });

    const todo = { title: input.value };
    // Non-Redux way in component
    // this.todos.push(todo);

    this.service.addTodo(todo).subscribe(t => {
      // passimistic, add to server first, then update client state <-- this is preferred!!!
      this.ngRedux.dispatch({ type: 'ADD_TODO', todo: todo });
    });

    // optimistic, update client state first, need to generate a unique id first
    // then save to server, if failed, roll back client state
    // this.ngRedux.dispatch({ type: 'ADD_TODO', todo: todo, id: Date.now() });
    // this.service.addTodo(todo).subscribe(t => {
    //   this.ngRedux.dispatch({ type: 'ADD_TODO_CORRELATE', todo: todo }); // have new id from backend
    // }, err => {
    //   this.ngRedux.dispatch({ type: 'FETCH_TODOS_ERROR', oldid: 1, newid: 2 }); // roll back the added todo
    // });

    // this.ngRedux.dispatch({ type: 'ADD_TODO_CORRELATE', todo: todo });

    // this.service.addTodo(todo);

    input.value = '';
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({ type: REMOVE_TODO, id: todo.id });
  }
}
