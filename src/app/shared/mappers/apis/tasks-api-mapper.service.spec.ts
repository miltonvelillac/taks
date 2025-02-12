import { TestBed } from '@angular/core/testing';

import { TasksApiMapperService } from './tasks-api-mapper.service';

describe('TasksApiMapperService', () => {
  let service: TasksApiMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksApiMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
