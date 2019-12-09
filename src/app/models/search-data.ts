import { DatePipe } from '@angular/common';

export class SearchData {
    origin:string;
    destination:string;
    date:Date;

    formatDate(){
        return new DatePipe('en-US').transform(this.date,"YYYY-MM-DD");

    }

    isValid(){
        return this.origin!=null && this.destination!=null&& this.date!=null;
    }
}