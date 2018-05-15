import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoringAlgorithmComponent } from './coloring-algorithm.component';

describe('ColoringAlgorithmComponent', () => {
  let component: ColoringAlgorithmComponent;
  let fixture: ComponentFixture<ColoringAlgorithmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoringAlgorithmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoringAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
