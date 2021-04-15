import { TestBed } from '@angular/core/testing';

import { ProductInfoService } from './product-info.service';

describe('ProductInfoService', () => {
  let service: ProductInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
