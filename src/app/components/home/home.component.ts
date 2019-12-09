import { Component, OnInit } from '@angular/core';
import {SearchData} from "../../models";
import {APIService} from "../../services/apiService";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchData:SearchData;

  constructor(
    private apiService:APIService
  ) { }

  ngOnInit() {
    this.searchData = new SearchData()
    this.searchData.origin="DFW";
    this.searchData.destination="ORD";
    this.searchData.date=new Date();

    this.search(this.searchData);
  }

  search(searchData:SearchData){
    // use the search API to get the worst flight, then redirect to the /worstflight page
    this.apiService.getItinerary(searchData);

  }

}
