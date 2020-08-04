import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditYearPlanOneTableComponent } from './edit-year-plan-one-table.component';

describe('EditYearPlanOneTableComponent', () => {
  let component: EditYearPlanOneTableComponent;
  let fixture: ComponentFixture<EditYearPlanOneTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditYearPlanOneTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditYearPlanOneTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
