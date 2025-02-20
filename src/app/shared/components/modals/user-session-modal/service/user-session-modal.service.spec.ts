import { TestBed } from '@angular/core/testing';

import { UserSessionModalService } from './user-session-modal.service';

describe('UserSessionModalService', () => {
  let service: UserSessionModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSessionModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
