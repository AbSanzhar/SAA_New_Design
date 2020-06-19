import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryDissCouncilComponent } from './secretary-diss-council.component';

describe('SecretaryDissCouncilComponent', () => {
  let component: SecretaryDissCouncilComponent;
  let fixture: ComponentFixture<SecretaryDissCouncilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretaryDissCouncilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretaryDissCouncilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
