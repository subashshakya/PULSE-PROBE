import { Component } from '@angular/core';
import { LabService } from '../../services/lab.service';
import { finalize } from 'rxjs';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent {
  public value: string = '';
  public isLoading: boolean = false;
  public showError: any = {
    show: false,
    message: ''
  }
  public doctorDetails: any;

  constructor(
    private service: LabService,
    private messageService: MessageService
  ) {}

  public getDoctorDetails = (): void => {
    this.isLoading = true;
    this.service.getDoctorDetailsByNMCNumber(this.value)
      .pipe(finalize(() =>  {this.isLoading = false}))
      .subscribe(res => {
        this.showError.show = false;
        if (res?.message) {
          this.showError.show = true;
          this.showError.message = res?.message;
        }
        this.doctorDetails = res;
      }, err => {
        this.showError.show = true;
        this.showError.message = err?.message;
      })
  }

  public associateDoctor = (): void => {
    this.isLoading = true;
    let reqData = {
      id: 0,
      healthCareCenterId: localStorage.getItem('userId'),
      doctorId: this.doctorDetails?.doctorId,
      isEnrolled: true
    }
    this.service.associateDoctor(reqData)
      .pipe(finalize(() => { this.isLoading = false }))
      .subscribe(res => {
        if (res) {
          this.messageService.add({ severity: 'success', summary: 'Doctor Association Successful' })
        }
      }, err => {
        this.messageService.add({ severity: 'error', summary: 'Couldnot Associate Doctor'});
      });
  }

  public removeDoctor = (): void => {
    this.isLoading = true;
    let reqData = {
      id: 0,
      healthCareCenterId: localStorage.getItem('userId'),
      doctorId: this.doctorDetails?.doctorId,
      isEnrolled: false
    }
    this.service.removeDoctor(reqData)
      .pipe(finalize(() => { this.isLoading = false }))
      .subscribe(res => {
        if (res) {
          this.messageService.add({ severity: 'success', summary: 'Doctor Removal Successful' })
        }
      }, err => {
        this.messageService.add({ severity: 'error', summary: 'Couldnot Remove Doctor' })
      })
  }
}
