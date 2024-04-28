// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      // Redirect to the login page if not authenticated
      console.log("Returning admin log page")
      this.router.navigate(['/admin/login']);
      // this.router.navigate(['admin/manage/movies']);
      // this.router.navigate(['admin/deletemovies']);
      // this.router.navigate(['admin/manage/promotions']);
      // this.router.navigate(['admin/manage/users']);
      return false;
    }
  }
}
