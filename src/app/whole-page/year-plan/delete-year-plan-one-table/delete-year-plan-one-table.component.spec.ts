import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteYearPlanOneTableComponent } from './delete-year-plan-one-table.component';

describe('DeleteYearPlanOneTableComponent', () => {
  let component: DeleteYearPlanOneTableComponent;
  let fixture: ComponentFixture<DeleteYearPlanOneTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteYearPlanOneTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteYearPlanOneTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
