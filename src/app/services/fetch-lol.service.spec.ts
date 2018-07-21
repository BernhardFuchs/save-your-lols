import { TestBed, inject } from '@angular/core/testing';

import { FetchLolService } from './fetch-lol.service';

describe('FetchLolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchLolService]
    });
  });

  it('should be created', inject([FetchLolService], (service: FetchLolService) => {
    expect(service).toBeTruthy();
  }));
});
