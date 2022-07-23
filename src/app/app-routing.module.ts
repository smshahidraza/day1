import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightInfoComponent } from './flight-info/flight-info.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoadFlightComponent } from './load-flight/load-flight.component';

const routes: Routes = [
  { path: 'search-flight', component: FlightInfoComponent },
  { path: 'book-flight/:id', component: LoadFlightComponent },
  { path: '**',   component: NotFoundComponent},
  { path: '',   redirectTo: '/search-flight', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
