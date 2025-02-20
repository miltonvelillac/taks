import { TestBed } from '@angular/core/testing';

import { UserSessionStoreHandlerService } from './user-session-store-handler.service';

describe('UserSessionStoreHandlerService', () => {
  let service: UserSessionStoreHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSessionStoreHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
