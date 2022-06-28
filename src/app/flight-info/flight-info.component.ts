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
        "id": "0001",
        "logo": "",
        "flightNumber" : "AI409",
        "originAirport" : "DEL",
        "destAirport": "PAT",
        "departureTime": new Date("26 June 2022 11:15:00 EDT"),
        "arrivalTime": new Date("26 June 2022 19:40:00 EDT"),
        "origin": "Delhi",
        "destination": "Patna",
        "status": "On Time"
      },
      {
        "id": "0002",
        "logo": "",
        "flightNumber" : "AI430",
        "originAirport" : "DEL",
        "destAirport": "BOM",
        "departureTime": new Date("26 June 2022 16:40:00 EDT"),
        "arrivalTime": new Date("26 June 2022 19:40:00 EDT"),
        "origin": "Delhi",
        "destination": "Mumbai",
        "status": "Delayed"
      },
      {
        "id": "0003",
        "logo": "",
        "flightNumber" : "AI402",
        "originAirport" : "IAD",
        "destAirport": "DEL",
        "departureTime": new Date("26 June 2022 13:40:00 EDT"),
        "arrivalTime": new Date("26 June 2022 19:40:00 EDT"),
        "origin": "Washington",
        "destination": "Delhi",
        "status": "Canceled"
      },
      {
        "id": "0004",
        "logo": "",
        "flightNumber" : "G8 165",
        "originAirport" : "PAT",
        "destAirport": "BHS",
        "departureTime": new Date("26 June 2022 19:40:00 EDT"),
        "arrivalTime": new Date("26 June 2022 19:40:00 EDT"),
        "origin": "Patna",
        "destination": "BiharSharif",
        "status": "On Time"
      },
      {
        "id": "0005",
        "logo": "",
        "flightNumber" : "G8 131",
        "originAirport" : "GYA",
        "destAirport": "KOL",
        "departureTime": new Date("27 June 2022 16:40:00 EDT"),
        "arrivalTime": new Date("26 June 2022 19:40:00 EDT"),
        "origin": "Gaya",
        "destination": "Kolkatta",
        "status": "On Time"
      }  


    ];  

    // let age: number = 44;
    // console.log(age);
  }



}
