import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYearPlanOneTableComponent } from './add-year-plan-one-table.component';

describe('AddYearPlanOneTableComponent', () => {
  let component: AddYearPlanOneTableComponent;
  let fixture: ComponentFixture<AddYearPlanOneTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddYearPlanOneTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddYearPlanOneTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
