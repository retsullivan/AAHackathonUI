import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SearchData } from '../../models';
import { APIService } from '../../services/apiService';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchData: SearchData;

  constructor(private router: Router, private apiService: APIService) { }

  ngOnInit() {
    this.searchData = new SearchData()
  }

  async search() {
    // use the search API to get the worst flight, then redirect to the /worstflight page
    if (this.searchData.isValid()) {
      let itinerary = await this.apiService.getItinerary(this.searchData);
      this.router.navigate(['/worsttrip'], { state: itinerary })
    }
    else {
      alert("invalid search criteria");
    }
  }
}
