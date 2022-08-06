import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FlightInfoComponent } from './flight-info/flight-info.component';
// import { BookFlightComponent } from './book-flight/book-flight.component';
// import {MatCardModule, MatIconModule, MatToolbarModule}
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {FlightWidgetComponent} from './flight-widget/flight-widget.component';
import { LoadFlightComponent } from './load-flight/load-flight.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FlightInfoComponent,
    LoadFlightComponent,
    FlightWidgetComponent, 
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
    // MatCardModule,
    // MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
