import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormCreatorComponent } from './input-form-creator.component';

describe('InputFormCreatorComponent', () => {
  let component: InputFormCreatorComponent;
  let fixture: ComponentFixture<InputFormCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFormCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFormCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
