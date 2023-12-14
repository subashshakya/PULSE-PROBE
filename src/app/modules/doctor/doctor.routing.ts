import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ReportDetailsComponent } from "./components/report-details/report-details.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'doctor',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'report-detail/:id',
        component: ReportDetailsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DoctorRoutingModule{ }