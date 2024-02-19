import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientRoutingModule } from './patient.routing';
import { PatientNavBarComponent } from './components/patient-nav-bar/patient-nav-bar.component';
import { LandingComponent } from './pages/landing/landing.component';
import { InputTextModule } from 'primeng/inputtext';
import { LabsCarouselComponent } from './components/labs-carousel/labs-carousel.component';
import { CreateBookingComponent } from './pages/create-booking/create-booking.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientService } from './services/patient.service';
import { SkeletonModule } from 'primeng/skeleton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    PatientNavBarComponent,
    LandingComponent,
    LabsCarouselComponent,
    CreateBookingComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule,
    InputTextModule,
    HttpClientModule,
    SkeletonModule,
    ConfirmDialogModule,
    CarouselModule,
    DropdownModule
  ],
  providers: [
    PatientService
  ]
})
export class PatientModule { }
