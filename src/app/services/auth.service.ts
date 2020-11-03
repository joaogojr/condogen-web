import { Injectable } from "@angular/core";
import { LocalStorage } from "@ngx-pwa/local-storage";
import { HttpService } from "./http.service";
import { HttpParams, HttpHeaders } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthServiceCommon {
  isLogged = false;
  isAdmin = false;
  isManager = false;
  constructor(
    protected localStorage: LocalStorage,
    private readonly httpService: HttpService
  ) {}
  getAuthorizationToken() {
    return this.localStorage.getItem("authToken").toPromise();
  }
  login(email, password) {
    const auth = btoa(`${email}:${password}`);
    return this.httpService
      .genericPost("auth", null, { Authorization: "Basic " + auth })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
  signup(name, email, password, role) {
    let data = {};
    role = !role ? "user" : role;
    data = { name, email, password, role };
    return this.httpService.genericPost("users", data, null).pipe(
      map((res) => {
        return res;
      })
    );
  }
  updatePassword(passwordUser, token) {
    const data = { password: passwordUser };
    return this.httpService.genericPut("password-resets/" + token, data).pipe(
      map((res) => {
        return res;
      })
    );
  }
  saveUser(user): Promise<boolean> {
    return new Promise((resolve) => {
      localStorage.setItem("authToken", user.token);
      localStorage.setItem("name", user.user.name);
      localStorage.setItem("id", user.user.id);

      this.localStorage.setItem("authToken", user.token).subscribe((data) => {
        this.localStorage.setItem("id", user.user.id).subscribe((userID) => {
          this.localStorage
            .setItem("role", user.user.role)
            .subscribe((userRole) => {
              this.isLogged = true;
              if (user.user.role === "admin") this.isAdmin = true;
              if (user.user.role === "manager") this.isManager = true;
              resolve(data);
            });
        });
      });
    });
  }
  isAuthenticated(): Promise<any> {
    return new Promise((resolve) => {
      this.localStorage.getItem("authToken").subscribe((tokenAuth) => {
        this.isLogged = !!tokenAuth;
        resolve(tokenAuth);
      });
    });
  }
  isAdministrator(): Promise<any> {
    return new Promise((resolve) => {
      this.localStorage.getItem("role").subscribe((role) => {
        if (role === "admin") {
          this.isAdmin = true;
          resolve(true);
        }
        resolve(false);
      });
    });
  }
  isBuildingManager(): Promise<any> {
    return new Promise((resolve) => {
      this.localStorage.getItem("role").subscribe((role) => {
        if (role === "manager") {
          this.isManager = true;
          resolve(true);
        }
        resolve(false);
      });
    });
  }
}
