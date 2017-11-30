/* tslint:disable:no-unused-variable */
import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ TodosComponent ],
      providers: [ TodoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load todos from server', async(() => {
    const service = TestBed.get(TodoService); // only works with Service provided at module level, singlton, in app.module.ts
    // const service = fixture.debugElement.injector.get(TodoService); // to get a module directly from module level
    // spyOn(service, 'getTodos').and.returnValue(Observable.from([ [1, 2, 3] ]));
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([ 1, 2, 3]));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.todos.length).toBe(3);
      console.log('expect WAS CALLED');
    });
  }));

  it('should load todos from server, fakeAsync', fakeAsync(() => {
    const service = TestBed.get(TodoService);
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));

    fixture.detectChanges();
    tick();

    expect(component.todos.length).toBe(3);
    console.log('expect WAS CALLED');
  }));
});
