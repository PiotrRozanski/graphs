import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjacencyMatrixPageComponent } from './adjacency-matrix-page.component';

describe('AdjacencyMatrixPageComponent', () => {
  let component: AdjacencyMatrixPageComponent;
  let fixture: ComponentFixture<AdjacencyMatrixPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjacencyMatrixPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjacencyMatrixPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
