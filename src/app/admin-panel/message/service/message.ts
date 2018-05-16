export class Message {
    public message_id: number;
    public date: string;
    public name: string;
    public email: string;
    public theme: string;
    public text: string;
    public answer: string;
    public user_id: number;
    public http_x_real_ip: string;


    constructor(res) {
        this.message_id = res.message_id;
        this.date = res.date;
        this.email = res.email;
        this.name = res.name;
        this.theme = res.theme;
        this.text = res.text;
        this.answer = res.answer;
        this.user_id = res.user_id;
        this.http_x_real_ip = res.http_x_real_ip;
    }
}

