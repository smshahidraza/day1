import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightInfoModel } from '../flight-info/flight-info.model';
import { FlightService } from '../flight-info/flight.service';
import { User } from '../load-flight/user.model';
import { PrayerTime } from '../user-list/prayer-time.model';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  public flightInfo: FlightInfoModel;
  public prayerTimes: PrayerTime[];
  public userList: User[];

  constructor( 
    private flightService: FlightService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/posts/').subscribe( response => {
      this.userList = response;
    });
  }

}


