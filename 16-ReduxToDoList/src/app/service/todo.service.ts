import { IAppState } from '../store';
import { NgRedux } from 'ng2-redux/lib/components/ng-redux';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {
  private readonly url = 'https://jsonplaceholder.typicode.com/todos';

  todos;

  constructor(
    private http: Http,
    private ngRedux: NgRedux<IAppState>) {
    }

  loadTodos(): void {
    this.ngRedux.dispatch({type: 'FETCH_TODOS_REQUEST'});
    // store.isFetching = true;
    this.http.get(this.url).subscribe(todos => {
      // Non-Redux way in component
      // this.todos = todos.json();
      this.ngRedux.dispatch({ type: 'FETCH_TODOS_SUCCESS', todos: todos.json() });
    }, err => {
      this.ngRedux.dispatch({ type: 'FETCH_TODOS_ERROR' });
    });
    // orig: return this.http.get(this.url);
  }

  addTodo(todo) {
    // if (!input) {
    //   return;
    // }

    // const todo = { title: input.value };
    // this.todos.push(todo);
    // this.http.post(this.url, todo).subscribe(t => {
    //   this.ngRedux.dispatch({ type: 'ADD_TODO', todo: todo });
    // });

    return this.http.post(this.url, todo);
  }
}
