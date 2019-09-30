import { TestBed } from '@angular/core/testing';

import { GenerateSearchService } from './generate-search.service';

describe('GenerateSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenerateSearchService = TestBed.get(GenerateSearchService);
    expect(service).toBeTruthy();
  });
});
