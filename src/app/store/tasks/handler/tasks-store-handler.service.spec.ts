import { TestBed } from '@angular/core/testing';

import { TasksStoreHandlerService } from './tasks-store-handler.service';

describe('TasksStoreHandlerService', () => {
  let service: TasksStoreHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksStoreHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
