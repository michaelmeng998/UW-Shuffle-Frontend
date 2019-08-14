import { Component, OnInit } from "@angular/core";
import { first } from "rxjs/operators";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { UserService, AuthenticationService, GetService } from "../_services";

@Component({
  templateUrl: "home.component.html",
  styleUrls: ["home.component.css"]
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  currentUser: any;
  users = [];
  types = [];
  hardware = [];

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private GetService: GetService,
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
    this.getAllHardware();
  }

  private getAllTypes() {
    this.GetService.getTypes().subscribe(type => (this.types = type));
  }

  private getAllHardware() {
    this.GetService.getHardware().subscribe(
      hardware => (this.hardware = hardware)
    );
  }
}
