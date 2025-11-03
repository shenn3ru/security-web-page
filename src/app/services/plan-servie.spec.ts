import { TestBed } from '@angular/core/testing';

import { PlanServie } from './plan-servie';

describe('PlanServie', () => {
  let service: PlanServie;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanServie);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
