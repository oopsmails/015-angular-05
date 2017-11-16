import { TestBed, inject } from '@angular/core/testing';

import { UsertokenService } from './usertoken.service';

describe('UsertokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsertokenService]
    });
  });

  it('should be created', inject([UsertokenService], (service: UsertokenService) => {
    expect(service).toBeTruthy();
  }));
});
