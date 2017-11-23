import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagination2Component } from './pagination2.component';

describe('Pagination2Component', () => {
  let component: Pagination2Component;
  let fixture: ComponentFixture<Pagination2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagination2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagination2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
