import { DatePipe } from '@angular/common';

export class FlightData{
    index:number;
    flightNumber:number
    origin: string;
    destination:string;
    travelTime:number;
    departureTime: Date
    arrivalTime: Date;

    constructor(flightData: FlightData) {
        if (flightData) {
          this.index= flightData.index;
          this.flightNumber = flightData.flightNumber;
          this.origin = flightData.origin;
          this.destination =flightData.destination;
          this.travelTime = flightData.travelTime;
          this.departureTime = flightData.departureTime;
          this.arrivalTime = flightData.arrivalTime;
        }
    }

    formatDate(date:Date){
        return new DatePipe('en-US').transform(date,"YYYY-MM-DD");

    }
}