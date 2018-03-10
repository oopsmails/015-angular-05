import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagination2Component } from './pagination2.component';
import { PaginationConfig } from './pagination-config';

fdescribe('Pagination2Component', () => {
  const page1ClickedReturn: { pageClicked: number, pageRange?: Array<number> } = { pageClicked: 1, pageRange: [ 1, 2, 3 ] };

  let component: Pagination2Component;
  beforeAll((): void => {
    component = new Pagination2Component();
    component.paginationConfig = new PaginationConfig();
  });

  describe('Pagination2Component testing', (): void => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should raise pageClick event when onPageClick, pages combined.', () => {
      component.paginationConfig.numberOfPageCombine = 3;
      component.numOfPages = 10;
      component.paginationConfig.currentPage = 8;
      component.paginationConfig.disableNavigation = false;

      let pageClickedReturn = {};
      component.pageClickEmitter.subscribe((tv: Array<number>) => pageClickedReturn = tv);

      component.pageClick2(1);

      expect(pageClickedReturn).not.toBeNull();
      expect(pageClickedReturn).toEqual(page1ClickedReturn);
    });
  });


});
