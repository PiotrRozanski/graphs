import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenceMatrixCreatorComponent } from './incidence-matrix-creator.component';

describe('IncidenceMatrixCreatorComponent', () => {
  let component: IncidenceMatrixCreatorComponent;
  let fixture: ComponentFixture<IncidenceMatrixCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidenceMatrixCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenceMatrixCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
