import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyScienceProjComponent } from './my-science-proj.component';

describe('MyScienceProjComponent', () => {
  let component: MyScienceProjComponent;
  let fixture: ComponentFixture<MyScienceProjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyScienceProjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyScienceProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
