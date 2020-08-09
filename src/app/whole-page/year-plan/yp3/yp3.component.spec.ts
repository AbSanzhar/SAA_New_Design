import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Yp3Component } from './yp3.component';

describe('Yp3Component', () => {
  let component: Yp3Component;
  let fixture: ComponentFixture<Yp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Yp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Yp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
