import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Yp4Component } from './yp4.component';

describe('Yp4Component', () => {
  let component: Yp4Component;
  let fixture: ComponentFixture<Yp4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Yp4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Yp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
