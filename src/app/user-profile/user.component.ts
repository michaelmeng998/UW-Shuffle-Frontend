import { Component, OnInit } from "@angular/core";
import { GetService } from "../_services";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  user_info;
  userForm: FormGroup;

  constructor(
    private GetService: GetService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ["", Validators.required],
      username: ["", Validators.required],
      email: ["", Validators.required]
    });
    this.getUser();
  }

  private getUser() {
    this.GetService.getUser().subscribe(user => (this.user_info = user));
  }
}
