import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjacencyListComponent } from './adjacency-list.component';

describe('AdjacencyListComponent', () => {
  let component: AdjacencyListComponent;
  let fixture: ComponentFixture<AdjacencyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjacencyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjacencyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
