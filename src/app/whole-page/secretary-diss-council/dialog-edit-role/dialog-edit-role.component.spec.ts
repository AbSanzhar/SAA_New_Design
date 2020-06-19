import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditRoleComponent } from './dialog-edit-role.component';

describe('DialogEditRoleComponent', () => {
  let component: DialogEditRoleComponent;
  let fixture: ComponentFixture<DialogEditRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEditRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
