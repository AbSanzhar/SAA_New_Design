import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDissetComponent } from './edit-disset.component';

describe('EditDissetComponent', () => {
  let component: EditDissetComponent;
  let fixture: ComponentFixture<EditDissetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDissetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDissetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
