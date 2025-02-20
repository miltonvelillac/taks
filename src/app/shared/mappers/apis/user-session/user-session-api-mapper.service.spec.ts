import { TestBed } from '@angular/core/testing';

import { UserSessionApiMapperService } from './user-session-api-mapper.service';

describe('UserSessionApiMapperService', () => {
  let service: UserSessionApiMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSessionApiMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
