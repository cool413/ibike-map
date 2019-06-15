import { TestBed } from '@angular/core/testing';

import { IbikeService } from './ibike.service';

describe('IbikeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IbikeService = TestBed.get(IbikeService);
    expect(service).toBeTruthy();
  });
});
