import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule
} from "@angular/material";

// used to create fake backend
import { fakeBackendProvider } from "./_helpers";

import { GetService } from "./_services/get.service";
import { PostService } from "./_services/post.service";

import { appRoutingModule } from "./app.routing";
import { JwtInterceptor, ErrorInterceptor } from "./_helpers";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home";
import { LoginComponent } from "./login";
import { UserComponent } from "./user-profile";
import { RegisterComponent } from "./register";
import { AlertComponent } from "./_components";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LandingComponent } from "./landing/landing.component";
import { MerchComponent } from "./merch/merch.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    UserComponent,
    LandingComponent,
    MerchComponent
  ],
  providers: [
    GetService,
    PostService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
