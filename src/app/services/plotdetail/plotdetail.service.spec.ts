import { TestBed } from '@angular/core/testing';

import { PlotdetailService } from './plotdetail.service';

describe('PlotdetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlotdetailService = TestBed.get(PlotdetailService);
    expect(service).toBeTruthy();
  });
});
