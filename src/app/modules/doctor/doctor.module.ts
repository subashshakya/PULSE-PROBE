import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DoctorRoutingModule } from './doctor.routing';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { CalendarComponent } from './shared/calendar/calendar.component';
import { PatientReportListComponent } from './shared/patient-report-list/patient-report-list.component';
import { ReportListItemComponent } from './shared/report-list-item/report-list-item.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InputTextModule } from 'primeng/inputtext';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    DashboardComponent,
    NavBarComponent,
    CalendarComponent,
    PatientReportListComponent,
    ReportListItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DoctorRoutingModule,
    InputTextModule,
    FullCalendarModule
  ]
})
export class DoctorModule { }
