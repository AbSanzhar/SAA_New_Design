import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Yp2Component } from './yp2.component';

describe('Yp2Component', () => {
  let component: Yp2Component;
  let fixture: ComponentFixture<Yp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Yp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Yp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
