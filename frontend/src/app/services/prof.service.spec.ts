import { TestBed } from '@angular/core/testing';

import { ProfService } from './prof.service';

describe('ProfService', () => {
  let service: ProfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
