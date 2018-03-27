import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixGeneratorComponent } from './matrix-generator.component';

describe('MatrixGeneratorComponent', () => {
  let component: MatrixGeneratorComponent;
  let fixture: ComponentFixture<MatrixGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrixGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
