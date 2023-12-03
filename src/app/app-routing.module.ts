import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/doctor/doctor.module').then((m) => m.DoctorModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m)=>m.AuthModule)
  },
  {
    path: 'patient',
    loadChildren: () => import('./modules/patient/patient.module').then((m) => m.PatientModule)
  },
  {
    path: 'doctor',
    loadChildren: () => import('./modules/doctor/doctor.module').then((m) => m.DoctorModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
