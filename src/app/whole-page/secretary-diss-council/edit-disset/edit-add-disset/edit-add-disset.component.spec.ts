import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddDissetComponent } from './edit-add-disset.component';

describe('EditAddDissetComponent', () => {
  let component: EditAddDissetComponent;
  let fixture: ComponentFixture<EditAddDissetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddDissetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddDissetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
