import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Subscription } from "rxjs";

import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  private tokenSubs: Subscription;

  authToken: string;
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.tokenSubs = this.authService.getToken().subscribe(token => {
       this.authToken = token;
       console.log(this.authToken);
    });


    if (this.authToken !== undefined) {
      const authRequest = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + this.authToken)
      });
      //console.log("hi");
      return next.handle(authRequest);
    } else {
      //console.log("bye")
      return next.handle(req);
    }
  }

}
