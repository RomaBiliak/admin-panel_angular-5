import { Injectable } from "@angular/core";
import { Http, Response/*, RequestOptions,Headers */} from "@angular/http";
import { HttpHeaders } from '@angular/common/http';
import { Genom } from "./genom";
import { GenomData } from "./genom-data";
import { Data } from "./data";
import { Observable } from "rxjs/Observable";
import { Settings } from "../../../shared/settings";
import { AppService } from "../../../shared/app.service";

@Injectable()
export class GenomService{
    private url = Settings.API_URL;
    
constructor(private http: Http, private appService: AppService) { }
    
     

        public getGenoms(): Observable<Genom[]> {
            let genoms = this.http.get(this.url+'genoms', this.appService.getOptions())
                .map(this.extractGenoms)  //відповідь перетворює в масив
                .catch(this.handleError);
            return genoms;
        }
        public getGenom(id_genom: string): Observable<GenomData> { //один геном з бази
            let genom = this.http.get(this.url+'genom/'+id_genom, this.appService.getOptions())
                .map(this.extractGenomData)
                .catch(this.handleError);
            return genom;
        }

        public updateGenom(genom: GenomData){
            return this.http.put(this.url+'genom/'+genom.genom_id, "data="+JSON.stringify(genom), this.appService.getOptions())
           .catch(this.handleError);
        }

        private extractGenoms(response: Response) {
            let res = response.json();
            let genoms: Genom[] = [];
            for (let i = 0; i < res.length; i++) {
                genoms.push(new Genom(res[i].id_genom, res[i].user_id, res[i].date, res[i].email, res[i].name, res[i].time, res[i].status));
            }
            return genoms;
        }
        private extractGenomData(response: Response) {
            return new GenomData(response.json());
        }
        public deleteGenom(genom_id :number){
            return this.http.delete(this.url+'genom/'+genom_id, this.appService.getOptions())
            .catch(this.handleError);    
        }
        public getPageData(){
            let data = this.http.get(this.url+'genom-data', this.appService.getOptions())
            .map(this.extractData)
            .catch(this.handleError);
            return data;
        }
        private extractData(response: Response){
            return new Data(response.json());
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
