export class UserData {
    public genoms: Array<any>;
    public user: Array<any>;
  

    constructor(res) {
         this.genoms = res.genoms;   
         this.user = res.user;   
    }
}

