import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDepUsersComponent } from './my-dep-users.component';

describe('MyDepUsersComponent', () => {
  let component: MyDepUsersComponent;
  let fixture: ComponentFixture<MyDepUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDepUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDepUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
