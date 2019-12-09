import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchData,FlightData} from '../models';

import { environment } from '../../environments/environment';
import { Itinerary } from '../models/itinerary';


@Injectable({
  providedIn: 'root'
})

export class APIService {
  private baseUrl = environment.baseUrl;
  

  constructor(private httpClient: HttpClient) { }

  async getItinerary(searchData:SearchData): Promise<Itinerary> {
    const itinerary = await this.httpClient.get<Itinerary>
        (`${this.baseUrl}/flights?date=${searchData.formatDate()}&origin=${searchData.origin}&destination=${searchData.destination}`)
      .toPromise();
    return itinerary;
  }

 
  
//   async addReview(review:ProductReview, id:number): Promise<ProductReview> {
//     return this.httpClient.post<ProductReview>(`${this.baseUrl}/${id}/reviews`, review)
//       .toPromise()
//       .then(response => new ProductReview(response));
//   }
}