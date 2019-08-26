import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaFaInputComponent } from './ta-fa-input.component';

describe('TaFaInputComponent', () => {
  let component: TaFaInputComponent;
  let fixture: ComponentFixture<TaFaInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaFaInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaFaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
