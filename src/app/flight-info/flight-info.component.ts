import { Component, OnInit } from '@angular/core';
import { FlightInfoModel } from './flight-info.model';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.css']
})

export class FlightInfoComponent implements OnInit {

  flightInfo: FlightInfoModel[] ;

  constructor() { }

  ngOnInit(): void {
    this.flightInfo = 
    [
      {
        "flightNumber" : "AI409",
        "origin": "Delhi",
        "destination": "Patna"
      },
      {
        "flightNumber" : "AI430",
        "origin": "Delhi",
        "destination": "Mumbai"
      },
      {
        "flightNumber" : "AI402",
        "origin": "Washington",
        "destination": "Delhi"
      },
      {
        "flightNumber" : "AI402",
        "origin": "Patna",
        "destination": "BiharSharif"
      },
      {
        "flightNumber" : "AI402",
        "origin": "Gaya",
        "destination": "Kolkatta"
      }  


    ];  
  }



}
