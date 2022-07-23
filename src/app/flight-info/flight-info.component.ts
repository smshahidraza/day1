import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightInfoModel } from './flight-info.model';
import { FlightService} from './flight.service';

// import { FlightWidgetComponent } from '../flight-widget';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.css']
})

export class FlightInfoComponent implements OnInit {
  
  flightInfo: FlightInfoModel[] ;
  shortestFlightInfo: FlightInfoModel;
  user: any;
  flightSelected: string = 'Not selected';

  constructor(private flightService: FlightService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.flightInfo = this.flightService.getFlightInfo();
    this.shortestFlightInfo = this.flightService.getShortestFlightInfo(0);

    
    // let age: number = 44;
    // console.log(age);
  }

  public getDuration(departureTime, arrivalTime): string {
    const depart: Date = new Date(departureTime);
    const arrival: Date = new Date(arrivalTime);

    const diff = arrival.getTime() - depart.getTime();
    const duration = new Date(diff);
    return " " + duration.getHours() + " hr " + duration.getMinutes() + " mins";
  }

  public selectedFlight(value: string) {
    console.log(" parent recieved flight -- " + value);

    if (value === '') {
      this.flightSelected = "No flight Selected";
    } else {
      this.flightSelected = value;
    }
  } 

  public loadBookFlightPage(flightId: number){
    console.log(flightId, flightId);
    this.router.navigate(['/book-flight', flightId]);
  }

}
