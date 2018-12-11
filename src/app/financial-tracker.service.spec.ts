import { TestBed } from '@angular/core/testing';

import { FinancialTrackerService } from './financial-tracker.service';

describe('FinancialTrackerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinancialTrackerService = TestBed.get(FinancialTrackerService);
    expect(service).toBeTruthy();
  });
});
