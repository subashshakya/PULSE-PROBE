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
import { TableModule } from 'primeng/table';
import { ReportDetailsComponent } from './components/report-details/report-details.component';
import { HttpClientModule } from '@angular/common/http';
import { DoctorService } from './services/doctor.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SharedModule } from 'src/app/shared/shared.module';
import { SkeletonModule } from 'primeng/skeleton';
import { ListboxModule } from 'primeng/listbox';
@NgModule({
  declarations: [
    DashboardComponent,
    ReportDetailsComponent,
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
    FullCalendarModule,
    TableModule,
    SharedModule,
    SkeletonModule,
    ProgressSpinnerModule,
    HttpClientModule,
    ListboxModule
  ],
  providers: [DoctorService]
})
export class DoctorModule { }
