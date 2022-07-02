import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
