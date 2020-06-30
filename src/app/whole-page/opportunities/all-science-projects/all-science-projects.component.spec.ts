import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllScienceProjectsComponent } from './all-science-projects.component';

describe('AllScienceProjectsComponent', () => {
  let component: AllScienceProjectsComponent;
  let fixture: ComponentFixture<AllScienceProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllScienceProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllScienceProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
