import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from "./pages/landing/landing.component";
import { CreateBookingComponent } from "./pages/create-booking/create-booking.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'create-booking',
  },
  {
    path: 'create-booking',
    component: CreateBookingComponent
  },
  {
    path: 'patient-dashboard',
    component: LandingComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class PatientRoutingModule { }