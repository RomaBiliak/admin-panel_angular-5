export class Users {
    public user_id: number;
    public date: string;
    public email: string;
    public country: string;
    public city: string;
    public http_referer: string;
    public remote_addr: string;


    constructor(user_id, date, email, country, city, http_referer, remote_addr) {
        this.user_id = user_id;
        this.date = date;
        this.email = email;
        this.country = country;
        this.city = city;
        this.http_referer = http_referer;
        this.remote_addr = remote_addr;

    }
}

