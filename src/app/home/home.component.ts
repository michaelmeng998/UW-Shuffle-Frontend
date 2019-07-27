import { Component, OnInit } from "@angular/core";
import { first } from "rxjs/operators";

import {
  UserService,
  AuthenticationService,
  ServerService
} from "../_services";

@Component({ templateUrl: "home.component.html" })
export class HomeComponent implements OnInit {
  currentUser: any;
  users = [];
  types = [];

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private serverService: ServerService
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.loadAllUsers();
    this.getAllTypes();
  }

  deleteUser(id: number) {
    this.userService
      .delete(id)
      .pipe(first())
      .subscribe(() => this.loadAllUsers());
  }

  private loadAllUsers() {
    this.userService
      .getAll()
      .pipe(first())
      .subscribe(users => (this.users = users));
  }

  private getAllTypes() {
    this.serverService.getTypes().subscribe(type => (this.types = type));
  }
}
