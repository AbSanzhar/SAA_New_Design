import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Yp5Component } from './yp5.component';

describe('Yp5Component', () => {
  let component: Yp5Component;
  let fixture: ComponentFixture<Yp5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Yp5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Yp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
