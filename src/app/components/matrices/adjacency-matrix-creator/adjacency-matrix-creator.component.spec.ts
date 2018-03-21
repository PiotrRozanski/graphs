import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjacencyMatrixCreatorComponent } from './adjacency-matrix-creator.component';

describe('AdjacencyMatrixCreatorComponent', () => {
  let component: AdjacencyMatrixCreatorComponent;
  let fixture: ComponentFixture<AdjacencyMatrixCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjacencyMatrixCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjacencyMatrixCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
