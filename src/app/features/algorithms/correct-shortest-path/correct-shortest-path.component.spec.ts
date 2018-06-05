import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectShortestPathComponent } from './correct-shortest-path.component';

describe('CorrectShortestPathComponent', () => {
  let component: CorrectShortestPathComponent;
  let fixture: ComponentFixture<CorrectShortestPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectShortestPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectShortestPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
