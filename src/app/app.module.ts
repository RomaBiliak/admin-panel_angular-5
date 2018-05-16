import { BrowserModule, Title } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AdminPanelModule } from "./admin-panel/admin-panel.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { LogouthComponent } from "./logouth/logouth.component";


import { AuthGuard } from "./service/auth-guard.service";
import { AuthService } from "./service/auth.service";

import {MaterialModule} from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogouthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminPanelModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [AuthGuard, AuthService,Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
