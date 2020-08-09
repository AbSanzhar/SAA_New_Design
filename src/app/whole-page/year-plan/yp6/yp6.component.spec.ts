import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Yp6Component } from './yp6.component';

describe('Yp6Component', () => {
  let component: Yp6Component;
  let fixture: ComponentFixture<Yp6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Yp6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Yp6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
