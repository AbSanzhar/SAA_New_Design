import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDissetComponent } from './add-disset.component';

describe('AddDissetComponent', () => {
  let component: AddDissetComponent;
  let fixture: ComponentFixture<AddDissetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDissetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDissetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
