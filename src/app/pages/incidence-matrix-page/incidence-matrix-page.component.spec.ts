import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenceMatrixPageComponent } from './incidence-matrix-page.component';

describe('IncidenceMatrixPageComponent', () => {
  let component: IncidenceMatrixPageComponent;
  let fixture: ComponentFixture<IncidenceMatrixPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidenceMatrixPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenceMatrixPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
