import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjacencyListPageComponent } from './adjacency-list-page.component';

describe('AdjacencyListPageComponent', () => {
  let component: AdjacencyListPageComponent;
  let fixture: ComponentFixture<AdjacencyListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjacencyListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjacencyListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
