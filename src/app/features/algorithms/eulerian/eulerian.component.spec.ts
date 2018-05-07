import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EulerianComponent } from './eulerian.component';

describe('EulerianComponent', () => {
  let component: EulerianComponent;
  let fixture: ComponentFixture<EulerianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EulerianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EulerianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
