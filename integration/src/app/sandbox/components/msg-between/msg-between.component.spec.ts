import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgBetweenComponent } from './msg-between.component';

describe('MsgBetweenComponent', () => {
  let component: MsgBetweenComponent;
  let fixture: ComponentFixture<MsgBetweenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgBetweenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgBetweenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
