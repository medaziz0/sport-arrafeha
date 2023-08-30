import { TestBed } from '@angular/core/testing';

import { SearchPlayerService } from './search-player.service';

describe('SearchPlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchPlayerService = TestBed.get(SearchPlayerService);
    expect(service).toBeTruthy();
  });
});
