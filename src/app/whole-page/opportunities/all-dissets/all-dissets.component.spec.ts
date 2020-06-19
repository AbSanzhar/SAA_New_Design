import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDissetsComponent } from './all-dissets.component';

describe('AllDissetsComponent', () => {
  let component: AllDissetsComponent;
  let fixture: ComponentFixture<AllDissetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDissetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDissetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
