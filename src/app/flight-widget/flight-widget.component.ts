import { Component, Input, OnInit } from '@angular/core';
import { FlightInfoModel } from '../flight-info/flight-info.model';

@Component({
  selector: 'app-flight-widget',
  templateUrl: './flight-widget.component.html',
  styleUrls: ['./flight-widget.component.css']
})
export class FlightWidgetComponent implements OnInit {

  @Input()
  title = '';

  @Input()
  flightName = '';

  @Input()
  cost = '';

  @Input()
  flightInfo: FlightInfoModel;

  constructor() { }

  ngOnInit(): void {
  }

}
