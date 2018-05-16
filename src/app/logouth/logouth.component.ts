import { Component, OnInit } from "@angular/core";
import { AuthService } from "../service/auth.service";
import {  Router } from "@angular/router";
@Component({
  selector: "app-logouth",
  templateUrl: "./logouth.component.html",
  styleUrls: ["./logouth.component.css"]
})
export class LogouthComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }

}
