import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LabRoutingModule } from './lab.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecentBookingsComponent } from './components/recent-bookings/recent-bookings.component';
import { AvailableDoctorsComponent } from './components/available-doctors/available-doctors.component';
import { BookingComponent } from './components/booking/booking.component';
import { CreateReportComponent } from './pages/create-report/create-report.component';
import { HttpClientModule } from '@angular/common/http';
import { LabService } from './services/lab.service';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { DoctorListComponentComponent } from './components/doctor-list-component/doctor-list-component.component';
import { DoctorModule } from '../doctor/doctor.module';
import { AddDoctorComponent } from './pages/add-doctor/add-doctor.component';
import { SubNavBarComponent } from './components/sub-nav-bar/sub-nav-bar.component';

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    RecentBookingsComponent,
    AvailableDoctorsComponent,
    BookingComponent,
    CreateReportComponent,
    DoctorListComponentComponent,
    AddDoctorComponent,
    SubNavBarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    LabRoutingModule,
    HttpClientModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    DialogModule,
    MessagesModule,
    DoctorModule
  ],
  providers: [
    LabService,
    MessageService
  ]
})
export class LabModule { }
