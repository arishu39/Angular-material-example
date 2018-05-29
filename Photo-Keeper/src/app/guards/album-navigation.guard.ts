import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SharedService } from '../services/shared.service';

@Injectable()
export class AlbumNavigationGuard implements CanActivate {
  constructor(private _sharedService: SharedService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._sharedService.userId === 0) {
      this.router.navigate(['../users']);
      return false;
    }
    return true;
  }
}
