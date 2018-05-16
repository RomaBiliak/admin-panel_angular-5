export class Data {
    public species: any;
    public division: any;
    public genus: any;
   
    constructor(res) {
        this.species = res.species;
        this.division = res.division;
        this.genus = res.genus;
    }
}