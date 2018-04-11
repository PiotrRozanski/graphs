import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormPageComponent } from './input-form-page.component';

describe('InputFormPageComponent', () => {
  let component: InputFormPageComponent;
  let fixture: ComponentFixture<InputFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
