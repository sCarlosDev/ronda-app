import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RondaForm } from './ronda-form';

describe('RondaForm', () => {
  let component: RondaForm;
  let fixture: ComponentFixture<RondaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RondaForm],
    }).compileComponents();

    fixture = TestBed.createComponent(RondaForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
