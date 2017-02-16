/**
 * Created by officeaccount on 15/02/2017.
 */
export class EntryCategory{
    public value:string = '';
    public img:string = '';
    public desc:string = '';

    constructor(value:string = '', img:string = '', desc:string = ''){
        this.value = value;
        this.img = img;
        this.desc = desc;
    }
}