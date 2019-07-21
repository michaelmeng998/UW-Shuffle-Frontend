// An Angular component is a class that contains the logic to control a piece of the UI.
//  A class becomes an Angular component when it is decorated with the @Component decorator.
//  For more info on Angular components see https://angular.io/guide/architecture-components

// The App Component contains the logic required to interact with and support the App Component template,
// at the moment the App Component template doesn't require any logic so the class is empty.

// The @Component decorator contains two parameters, the selector: 'app' parameter tells Angular to
// inject an instance of this component wherever it finds the <app></app> HTML tag. The templateUrl: 'app.component.html'
// parameter tells Angular where to find the HTML template for this component.

import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthenticationService } from "./_services";

@Component({ selector: "app", templateUrl: "app.component.html" })
export class AppComponent {
  currentUser: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
