import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../service/auth.service";
import { Response } from "@angular/http/src/static_response";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})

export class LoginComponent implements OnInit {
  ngOnInit(){
   
  }

  password: string;
  userLogin:string;
  message: string;
  data: any;
  constructor(public authService: AuthService, public router: Router) {
      this.setMessage();
  }
  setMessage() {
      this.message = "Logged " + (this.authService.isLoggedIn ? "in" : "out");
  }

  login() {
      if(this.authService.isLoggedIn)  this.redirectAdmin();
      this.authService.login(this.userLogin, this.password).subscribe(
       data => {this.setData(data)},
      );
  }
  private setData(data){
    if(data.token){
        sessionStorage.setItem('token',data.token);
        this.redirectAdmin();
    }else{
        console.dir(data.error);
    }
  }
  private redirectAdmin(){
    this.authService.isLoggedIn = true;
    let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : "/admin-panel";
    this.router.navigate([redirect]);
  }


}



