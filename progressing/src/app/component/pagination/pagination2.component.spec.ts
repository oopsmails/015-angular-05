import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagination2Component } from './pagination2.component';

fdescribe('Pagination2Component', () => {
  let component: Pagination2Component;
  let fixture: ComponentFixture<Pagination2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Pagination2Component]
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

  fit('should raise pageClick event when onPageClick, pages combined.', () => {
    component.numberOfPageCombine = 3;
    component.numOfPages = 10;
    component.currentPage = 8;
    component.disableNavigation = false;

    let returnPageArray = new Array<number>();
    component.pageClickEmitter.subscribe((tv: Array<number>) => returnPageArray = tv);

    component.pageClick2(1);

    expect(returnPageArray).not.toBeNull();
    expect(returnPageArray).toEqual([1, 2, 3]);
  });
});
