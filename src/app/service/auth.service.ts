import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions,Headers } from "@angular/http";
import { HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import {Settings} from "../shared/settings"
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
   // isLoggedIn: boolean = true;


    // URL для перенаправления після авторизации
    redirectUrl: string;

    private url = Settings.API_URL + "auth/";

  constructor(private http: Http) { }
    login(login: string, password: string) {
        let haders = new Headers({
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        });
        let options = new RequestOptions({ headers: haders });
        let authData = this.http.post(this.url+'signin', "login="+login+"&password="+password, options);
        return authData.map(res => { 
          return res.json()
        });
    }

    logout(): void {
        sessionStorage.removeItem('token');
        this.isLoggedIn = false;
    }
}
