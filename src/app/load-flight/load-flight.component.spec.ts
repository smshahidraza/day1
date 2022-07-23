import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadFlightComponent } from './load-flight.component';

describe('LoadFlightComponent', () => {
  let component: LoadFlightComponent;
  let fixture: ComponentFixture<LoadFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
