import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-nav-bar',
  templateUrl: './patient-nav-bar.component.html',
  styleUrls: ['./patient-nav-bar.component.scss']
})
export class PatientNavBarComponent {
  public searchText:string ='';
}
