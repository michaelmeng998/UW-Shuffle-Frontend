import { Component, OnInit } from "@angular/core";
import { first } from "rxjs/operators";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import {
  UserService,
  AuthenticationService,
  ServerService
} from "../_services";

@Component({
  templateUrl: "home.component.html",
  styleUrls: ["home.component.css"]
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  currentUser: any;
  users = [];
  types = [];

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private serverService: ServerService,
    private formBuilder: FormBuilder
  ) {
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search_item: ["", Validators.required]
    });
    // this.loadAllUsers();
    this.getAllTypes();
  }

  // deleteUser(id: number) {
  //   this.userService
  //     .delete(id)
  //     .pipe(first())
  //     .subscribe(() => this.loadAllUsers());
  // }

  // private loadAllUsers() {
  //   this.userService
  //     .getAll()
  //     .pipe(first())
  //     .subscribe(users => (this.users = users));
  // }

  private getAllTypes() {
    this.serverService.getTypes().subscribe(type => (this.types = type));
  }
}
