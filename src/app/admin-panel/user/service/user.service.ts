import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Users } from "./users";
import { UserData } from "./user-data";
import { Observable } from "rxjs/Observable";
import { AppService } from "../../../shared/app.service";
import { Settings } from "../../../shared/settings";
@Injectable()
export class UserService{
    private url = Settings.API_URL;
    
        constructor(private http: Http, private appService: AppService) { }
    
        public getUsers(): Observable<Users[]> {
            let users = this.http.get(this.url+"users", this.appService.getOptions())
                .map(this.extractUser)  //відповідь перетворює в масив
                .catch(this.handleError);
            return users;
        }
        private extractUser(response: Response) {
            let res = response.json();
            let users: Users[] = [];
            for (let i = 0; i < res.length; i++) {
                users.push(new Users(res[i].user_id, res[i].date, res[i].email, res[i].country, res[i].city, res[i].http_referer, res[i].remote_addr));
            }
            return users;
        }
        public getUser(user_id: string): Observable<UserData> { 
            let user = this.http.get(this.url+'user/'+user_id, this.appService.getOptions())
                .map(this.extractUserData)
                .catch(this.handleError);
            return user;
        }
        private extractUserData(response: Response) {
            return new UserData(response.json());
        }
        private handleError(error: any, cought: Observable<any>): any {
            let message = "";
    
            if (error instanceof Response) {
                let errorData = error.json().error || JSON.stringify(error.json());
                message = `code: ${error.status}  \n message: ${error.statusText || ''} \n ${errorData}`
            } else {
                message = error.message ? error.message : error.toString();
            }
    
            console.error(message);
    
            return Observable.throw(message);
        }
}