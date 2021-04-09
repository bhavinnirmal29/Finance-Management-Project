import { TestBed } from '@angular/core/testing';

import { AdminInfoService } from './admin-info.service';

describe('AdminInfoService', () => {
  let service: AdminInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
