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
  }

  

  search(){
    // use the search API to get the worst flight, then redirect to the /worstflight page
    if(this.searchData.isValid()){
      this.apiService.getItinerary(this.searchData);
    }
    else{
      alert("invalid search criteria");
    }

  }

}
