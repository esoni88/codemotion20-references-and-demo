import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestClientService } from './rest-client.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private restClientService: RestClientService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot):
    boolean |
    UrlTree |
    Promise<boolean> |
    Observable<boolean | UrlTree> {
        const accessToken = this.restClientService.getAccessToken();

        if (accessToken) {
            return true;
        } else {
            return this.router.createUrlTree(['/login']);
        }
    }
}
