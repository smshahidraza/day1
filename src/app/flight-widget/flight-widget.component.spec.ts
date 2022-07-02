import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightWidgetComponent } from './flight-widget.component';

describe('FlightWidgetComponent', () => {
  let component: FlightWidgetComponent;
  let fixture: ComponentFixture<FlightWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
