import { TestBed } from '@angular/core/testing';

import { MyFollowingService } from './my-following.service';

describe('MyFollowingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyFollowingService = TestBed.get(MyFollowingService);
    expect(service).toBeTruthy();
  });
});
