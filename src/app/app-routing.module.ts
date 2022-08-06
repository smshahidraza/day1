import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightInfoComponent } from './flight-info/flight-info.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoadFlightComponent } from './load-flight/load-flight.component';

const routes: Routes = [
  { path: 'search-flight', component: FlightInfoComponent },
  { path: 'book-flight/:id', component: LoadFlightComponent },
  { path: 'employee', component: UserListComponent },
  { path: '',   redirectTo: '/search-flight', pathMatch: 'full' },
  { path: '**',   component: NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
