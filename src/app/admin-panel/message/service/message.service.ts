import { Injectable } from "@angular/core";
import { Http, Response} from "@angular/http";
import { Messages } from "./messages";
import { Message } from "./message";
import { Observable } from "rxjs/Observable";
import { AppService } from "../../../shared/app.service";
import { Settings } from "../../../shared/settings";
@Injectable()
export class MessageService{
    private url = Settings.API_URL;
    
        constructor(private http: Http, private appService: AppService) { }
    
        public getMessages(): Observable<Messages[]> {
            let message = this.http.get(this.url+'messages', this.appService.getOptions())
                .map(this.extractMessages)  //відповідь перетворює в масив
                .catch(this.handleError);
            return message;
        }
        private extractMessages(response: Response) {
            let res = response.json();
            let messages: Messages[] = [];
            for (let i = 0; i < res.length; i++) {
                messages.push(new Messages(res[i]));
            }
            return messages;
        }

         public getMessage(message_id: string): Observable<Message> { //один геном з бази
            let genom = this.http.get(this.url+'message/'+message_id, this.appService.getOptions())
                .map(this.extractMessage)
                .catch(this.handleError);
            return genom;
        }
        private extractMessage(response: Response){      
            return new Message(response.json());    
        }
        public sendAnswer(message_id: number, answer: string){
            return this.http.post(this.url+'message/'+message_id, "answer="+answer, this.appService.getOptions())
           .catch(this.handleError);    
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