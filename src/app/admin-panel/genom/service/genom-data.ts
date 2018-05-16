export class GenomData {
    public genom_id: number;
    public user_id: number;
    public date: string;
    public email: string;
    public name: string;
    public time: number;
    public locus: string;
    public taxId: string;
    public division_id: number;
    public genus_id: number;
    public species_id: number;
    public title: string;
    public flag_CAI: string;
    public status: number;

    constructor(res) {
        this.genom_id = res.id_genom;
        this.user_id = res.user_id;
        this.date = res.date;
        this.email = res.email;
        this.name = res.name;
        this.time = res.time;
        this.locus = res.locus;
        this.taxId = res.taxId;
        this.division_id = res.division_id;
        this.genus_id = res.genus_id;
        this.species_id = res.species_id;
        this.title = res.title;
        this.flag_CAI = res.flag_CAI.toString(); //чому якщо int то відповідний радіобатон не чекається?
        this.status = res.status;
    }
}