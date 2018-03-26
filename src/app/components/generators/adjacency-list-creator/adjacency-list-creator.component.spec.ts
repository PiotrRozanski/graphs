import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjacencyListCreatorComponent } from './adjacency-list-creator.component';

describe('AdjacencyListCreatorComponent', () => {
  let component: AdjacencyListCreatorComponent;
  let fixture: ComponentFixture<AdjacencyListCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjacencyListCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjacencyListCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
