import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewExMemberDialogComponent } from './add-new-ex-member-dialog.component';

describe('AddNewExMemberDialogComponent', () => {
  let component: AddNewExMemberDialogComponent;
  let fixture: ComponentFixture<AddNewExMemberDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewExMemberDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewExMemberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
