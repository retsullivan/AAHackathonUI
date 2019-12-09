import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Itinerary } from 'src/app/models/itinerary';


@Component({
  selector: 'app-worsttrip',
  templateUrl: './worsttrip.component.html',
  styleUrls: ['./worsttrip.component.css']
})
export class WorsttripComponent implements OnInit {

  itinerary: Observable<Itinerary>;

  constructor(private router: Router) { }

  ngOnInit() {
    this.itinerary = history.state

    if (null == this.itinerary['segments']) {
        this.router.navigateByUrl("/home");
    }
  }

}
