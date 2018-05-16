import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

    canActivate() {
        let value = true;
        console.log("AuthGuard canActivate return " + value);
        return value;
    }
}
