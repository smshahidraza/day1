import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightInfoModel } from '../flight-info/flight-info.model';
import { FlightService } from '../flight-info/flight.service';
import { User } from './user.model';

@Component({
  selector: 'app-load-flight',
  templateUrl: './load-flight.component.html',
  styleUrls: ['./load-flight.component.css']
})
export class LoadFlightComponent implements OnInit {

  public flightInfo: FlightInfoModel;
  public userList: User[];

  constructor( 
    private flightService: FlightService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      // console.log(s["id"])
      // console.log("flightInfo AI409:", this.flightInfo);
      const flightNumber = param['id'];
      // console.log(flightNumber);
      this.flightInfo = this.flightService.getFlightInfoForFlightNumber(flightNumber);

      this.http.get<User[]>('https://jsonplaceholder.typicode.com/posts/').subscribe( response => {
        this.userList = response;
      });

      
    });
  }
}
