import { TestBed, async, inject } from '@angular/core/testing';

import { PhotoNavigationGuard } from './photo-navigation.guard';

describe('PhotoNavigationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoNavigationGuard]
    });
  });

  it('should ...', inject([PhotoNavigationGuard], (guard: PhotoNavigationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
