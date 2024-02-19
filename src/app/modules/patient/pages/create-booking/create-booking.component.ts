import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { PatientDetail } from '../../models/patient.model';
import { Doctor, HealthCareCenter } from 'src/app/shared/models/entitiy.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent implements OnInit{
  public patientDetail?: PatientDetail;
  public isLoading: boolean = false;
  public doctorDetails?: Doctor[];
  public healthCareCenters?: HealthCareCenter[];
  public selectedDoctor: Doctor[] = [];
  public selectedHealthCareCenter: HealthCareCenter[] = [];
  public doctorSelected: boolean = false;
  public selectedDoctorId?: string;
  public healthCareCenterId?: string;
  public doctorDesc?: string;
  public hccDesc?: string;
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getPatientInformation();
    this.getAllDoctors();
    this.getAllHealthCareCenters();
  }

  public getPatientInformation(): void {
    this.isLoading = true;
    this.patientService.getPatientInformation(1008)
      .subscribe(res => {
        if(res) {
          this.patientDetail = res;
          console.log(this.patientDetail);
          this.isLoading = false;
        }
      }, err => {
        this.isLoading = false;
        console.error(err);
      });
  }

  public getAllDoctors(): void {
    this.isLoading = true;
    this.patientService.getAllDoctors()
      .subscribe(res => {
        if(res) {
          this.doctorDetails = res;
          console.log(this.doctorDetails);
          this.isLoading = false;
        }
      }, err => {
        this.isLoading = false;
        console.error(err);
      });
  }

  public getAllHealthCareCenters(): void {
    this.isLoading = true;
    this.patientService.getAllHealthcareCenters()
      .subscribe(res => {
        this.healthCareCenters = res;
        console.log(this.healthCareCenters);
        this.isLoading = false;
      }, err => {
        this.isLoading = false;
        console.error(err);
      });
  }

  public createBooking(): void {
    this.patientService.createBooking()
      .subscribe(res => {
        if(res) {}
      })
  }

  public setHccId(name: string): void {
    this.healthCareCenterId = name;
    console.log(this.healthCareCenterId);
    this.healthCareCenters?.filter(element => {
      if(element.healthCareCenterName === this.healthCareCenterId) {
        this.hccDesc = element.description;
      }
    });
  }

  public setDoctorId(name: string): void {
    this.selectedDoctorId = name;
    this.doctorDetails?.filter(element => {
      if(element.firstName + ' ' + element.lastName === this.selectedDoctorId) {
        this.doctorDesc = element.description;
      }
    });
  }
}
