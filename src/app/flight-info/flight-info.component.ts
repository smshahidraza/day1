import { Component, OnInit } from '@angular/core';
import { FlightInfoModel } from './flight-info.model';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.css']
})

export class FlightInfoComponent implements OnInit {

  flightInfo1: FlightInfoModel;
  flightInfo2: FlightInfoModel;

  constructor() { }

  ngOnInit(): void {
    this.flightInfo1 = 
    {
      "flightNumber" : "AI409",
      "origin": "Delhi",
      "destination": "Patna"
    };
  

    this.flightInfo2 = 
    {
      "flightNumber" : "AI402",
      "origin": "Washington",
      "destination": "Delhi"
    };

  }



}
