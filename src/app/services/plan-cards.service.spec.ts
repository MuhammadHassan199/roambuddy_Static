import { TestBed } from '@angular/core/testing';

import { PlanCardsService } from './plan-cards.service';

describe('PlanCardsService', () => {
  let service: PlanCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
