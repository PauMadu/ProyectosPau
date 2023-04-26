import { TestBed } from '@angular/core/testing';

import { ChistesService } from './chistes.service';

describe('ChistesService', () => {
  let service: ChistesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChistesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
