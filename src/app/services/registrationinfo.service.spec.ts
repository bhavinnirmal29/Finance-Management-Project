import { TestBed } from '@angular/core/testing';

import { RegistrationinfoService } from './registrationinfo.service';

describe('RegistrationinfoService', () => {
  let service: RegistrationinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
