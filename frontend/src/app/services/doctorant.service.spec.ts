import { TestBed } from '@angular/core/testing';

import { DoctorantService } from './doctorant.service';

describe('DoctorantService', () => {
  let service: DoctorantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
