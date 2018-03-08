import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHostingComponent } from './card-hosting.component';

describe('CardHostingComponent', () => {
  let component: CardHostingComponent;
  let fixture: ComponentFixture<CardHostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
