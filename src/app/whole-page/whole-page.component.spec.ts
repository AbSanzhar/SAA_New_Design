import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WholePageComponent } from './whole-page.component';

describe('WholePageComponent', () => {
  let component: WholePageComponent;
  let fixture: ComponentFixture<WholePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WholePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WholePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
