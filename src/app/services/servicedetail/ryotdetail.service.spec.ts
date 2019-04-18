import { TestBed } from '@angular/core/testing';

import { RyotdetailService } from './ryotdetail.service';

describe('RyotdetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RyotdetailService = TestBed.get(RyotdetailService);
    expect(service).toBeTruthy();
  });
});
