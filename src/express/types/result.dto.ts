
export class ResultDto{
    success : Boolean;
    data : any;
    constructor(success : Boolean, data : any){
        this.success = success;
        this.data = data;
    }
}