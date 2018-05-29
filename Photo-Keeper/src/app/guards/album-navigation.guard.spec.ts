import { TestBed, async, inject } from '@angular/core/testing';

import { NavigationGuard } from './album-navigation.guard';

describe('NavigationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavigationGuard]
    });
  });

  it('should ...', inject([NavigationGuard], (guard: NavigationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
