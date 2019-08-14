import { Component, OnInit } from "@angular/core";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PostService } from "../_services";
import { first, map } from "rxjs/operators";

@Component({
  selector: "app-merch",
  templateUrl: "./merch.component.html",
  styleUrls: ["./merch.component.css"]
})
export class MerchComponent implements OnInit {
  merchForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private PostService: PostService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.merchForm = this.formBuilder.group({
      name: ["", Validators.required],
      typeId: ["", Validators.required],
      numberInStock: ["", Validators.required],
      dailyRentalRate: ["", Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.merchForm.invalid) {
      return;
    }

    this.loading = true;
    // this.PostService.PostTypes(this.merchForm.value)
    //   .pipe(first())
    //   .subscribe();

    this.PostService.PostHardware(this.merchForm.value)
      .pipe(first())
      .subscribe();
  }
}
