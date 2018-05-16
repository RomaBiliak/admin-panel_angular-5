import { RequestOptions,Headers} from "@angular/http";

export class AppService{
    public getOptions() :RequestOptions{
        let haders = new Headers({
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-TOKEN-TRINITY' : sessionStorage.getItem('token')
        });

        let options = new RequestOptions({ headers: haders });
        return options;
    }

}