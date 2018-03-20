import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjacencyMatrixComponent } from './adjacency-matrix.component';

describe('AdjacencyMatrixComponent', () => {
  let component: AdjacencyMatrixComponent;
  let fixture: ComponentFixture<AdjacencyMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjacencyMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjacencyMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
