import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphConverterPageComponent } from './graph-converter-page.component';

describe('GraphConverterPageComponent', () => {
  let component: GraphConverterPageComponent;
  let fixture: ComponentFixture<GraphConverterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphConverterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphConverterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
