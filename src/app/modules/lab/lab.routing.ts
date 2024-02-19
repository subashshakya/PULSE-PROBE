import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { RouteData } from "src/app/shared/enums/route-data.enum";
import { CreateReportComponent } from "./pages/create-report/create-report.component";
import { AddDoctorComponent } from "./pages/add-doctor/add-doctor.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          routeData: RouteData.Lab
        }
      },
      {
        path: 'create-report',
        component: CreateReportComponent,
        data: {
          routeData: RouteData.Lab
        }
      },
      {
        path: 'doctor-addition',
        component: AddDoctorComponent,
        data: {
          routeData: RouteData.Lab
        }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LabRoutingModule {}