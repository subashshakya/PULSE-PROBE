import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-labs-carousel',
  templateUrl: './labs-carousel.component.html',
  styleUrls: ['./labs-carousel.component.scss']
})
export class LabsCarouselComponent implements OnInit {
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getAllHealthcareCenters();
  }
}
