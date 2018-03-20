import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenceMatrixComponent } from './incidence-matrix.component';

describe('IncidenceMatrixComponent', () => {
  let component: IncidenceMatrixComponent;
  let fixture: ComponentFixture<IncidenceMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidenceMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenceMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
