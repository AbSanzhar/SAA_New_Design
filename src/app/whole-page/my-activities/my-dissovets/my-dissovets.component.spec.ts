import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDissovetsComponent } from './my-dissovets.component';

describe('MyDissovetsComponent', () => {
  let component: MyDissovetsComponent;
  let fixture: ComponentFixture<MyDissovetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDissovetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDissovetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
