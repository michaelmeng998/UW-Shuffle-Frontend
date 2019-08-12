import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs";

import { AuthenticationService } from "../_services";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let currentUser = this.authenticationService.currentUserValue;
    console.log(
      "current user info: " + this.authenticationService.currentUserValue
    );
    if (currentUser) {
      console.log("preparing to intercept request to add token...");
      //making clone of request first
      request = request.clone({
        setHeaders: {
          "x-auth-token": currentUser
        }
      });
    }
    return next.handle(request);
  }
}
