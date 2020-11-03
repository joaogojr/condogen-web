import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthServiceCommon } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class AdminGuardService implements CanActivate {
  constructor(public auth: AuthServiceCommon, public router: Router) {}
  canActivate(): Promise<boolean> {
    return this.auth.isAdministrator().then((data) => {
      if (!data) {
        this.router.navigate(["/"]);
      }
      return data;
    });
  }
}
