import { HttpClient } from '@angular/common/http';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FlightInfoModel } from '../flight-info/flight-info.model';
import { FlightService } from '../flight-info/flight.service';
import { PrayerTime } from '../user-list/prayer-time.model';
import { User } from './user.model';

@Component({
  selector: 'app-load-flight',
  templateUrl: './load-flight.component.html',
  styleUrls: ['./load-flight.component.css']
})
export class LoadFlightComponent implements OnInit {

  public flightInfo: FlightInfoModel;
  public userList: User[];
  public prayerTimes: PrayerTime[];
  public passengerForm: FormGroup;
  public firstName: FormControl;
  public lastName: FormControl;
  public email: FormControl;
  public seat: FormControl;

  public  showConfirmation = false;
  public fullName = "";
  public emailAddress;
  public errorMessage;
  // public seat:number;
  public seatList:number[];
  public laptop;

  constructor( 
    private flightService: FlightService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
    
    this.seatList = Array(30).fill(1).map((x,i) => i + 1 );

    this.laptop = 
    {
      brand: 'Dell',
      year: 2000
    }
    
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(10)]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.seat = new FormControl('');

    this.passengerForm = new FormGroup({
      'firstName': this.firstName,
      'lastName' : this.lastName,
      'email': this.email,
      'seat': this.seat
    });

    this.activatedRoute.params.subscribe(param => {
      const flightNumber = param['id'];
      this.flightInfo = this.flightService.getFlightInfoForFlightNumber(flightNumber);
    });
  }

  onSubmit(){
    if (this.passengerForm.invalid) {
      this.errorMessage = "Form is invalid..."
    } else {
      let firstName = this.passengerForm.get('firstName').value;
      let lastName  = this.passengerForm.get('lastName').value;
      let email = this.passengerForm.get('email').value;

      this.showConfirmation = true;
      this.fullName = firstName + "  " + lastName;
      this.emailAddress = email;
      console.log("Given Name: " + firstName + "  " + lastName);  
    }

  }
}
