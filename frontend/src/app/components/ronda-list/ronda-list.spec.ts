import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RondaList } from './ronda-list';

describe('RondaList', () => {
  let component: RondaList;
  let fixture: ComponentFixture<RondaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RondaList],
    }).compileComponents();

    fixture = TestBed.createComponent(RondaList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
