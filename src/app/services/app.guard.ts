import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanLoad, CanActivate{
    user  = { admin: true, logged: false }

    canActivate(): boolean {
        return this.user.admin;
    }

    canLoad(): boolean {
        return this.user.admin;
    }

}