import { TestBed } from '@angular/core/testing';

import { JsonApiService } from './json-api.service';

describe('JsonApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonApiService = TestBed.get(JsonApiService);
    expect(service).toBeTruthy();
  });
});
