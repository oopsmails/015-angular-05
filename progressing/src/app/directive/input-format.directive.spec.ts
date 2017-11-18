import { async, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { InputFormatDirective } from './input-format.directive';

describe('InputFormatDirective', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        //more providers
        { provide: ElementRef, useClass: MockElementRef }
      ]
    }).compileComponents();
  }));


  it('should create an instance', () => {
    // const directive = new InputFormatDirective(new ElementRef());
    // expect(directive).toBeTruthy();
  });
});

export class MockElementRef extends ElementRef {}
