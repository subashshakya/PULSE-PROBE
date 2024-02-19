import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-doctor-list-component',
  templateUrl: './doctor-list-component.component.html',
  styleUrls: ['./doctor-list-component.component.scss']
})
export class DoctorListComponentComponent {
  @Input() doctorObject: any;
}
