import { TestBed } from '@angular/core/testing';

import { FetchProductInfoService } from './fetch-product-info.service';

describe('FetchProductInfoService', () => {
  let service: FetchProductInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchProductInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
