import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Yp1Component } from './yp1.component';

describe('Yp1Component', () => {
  let component: Yp1Component;
  let fixture: ComponentFixture<Yp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Yp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Yp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
