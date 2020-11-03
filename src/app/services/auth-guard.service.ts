import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthServiceCommon } from "./auth.service";

@Injectable({ providedIn: "root" })
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthServiceCommon, public router: Router) {}

  canActivate(): Promise<boolean> {
    let active = false;
    return this.auth.isAuthenticated().then((data) => {
      active = !!data;
      if (!active) {
        this.router.navigate(["login"]);
      }
      return active;
    });
  }
}
