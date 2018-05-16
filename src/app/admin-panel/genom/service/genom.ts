export class Genom {
    public id_genom: number;
    public user_id: number;
    public date: string;
    public email: string;
    public name: string;
    public time: number;
    public status: number;

    constructor(id_genom, user_id, date, email, name, time, status) {
        this.id_genom = id_genom;
        this.user_id = user_id;
        this.date = date;
        this.email = email;
        this.name = name;
        this.time = time;
        this.status = status;
    }
}