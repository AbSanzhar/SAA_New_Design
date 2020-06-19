import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPublicationsComponent } from './all-publications.component';

describe('AllPublicationsComponent', () => {
  let component: AllPublicationsComponent;
  let fixture: ComponentFixture<AllPublicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPublicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
