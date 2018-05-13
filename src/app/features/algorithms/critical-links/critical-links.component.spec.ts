import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalLinksComponent } from './critical-links.component';

describe('CriticalLinksComponent', () => {
  let component: CriticalLinksComponent;
  let fixture: ComponentFixture<CriticalLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriticalLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
