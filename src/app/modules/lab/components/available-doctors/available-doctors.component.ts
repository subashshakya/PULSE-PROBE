import { Component, OnInit } from '@angular/core';
import { LabService } from '../../services/lab.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-available-doctors',
  templateUrl: './available-doctors.component.html',
  styleUrls: ['./available-doctors.component.scss']
})
export class AvailableDoctorsComponent implements OnInit{
  public isLoading: boolean = false;
  public doctorList: any[] = [];
  public labId: string = '1';

  constructor(
    private service: LabService,
  ) {
    this.labId = localStorage.getItem('userId') ?? '1';
  }

  ngOnInit(): void {
    this.getAllDoctors();
  }

  public getAllDoctors = (): void => {
    this.isLoading = true;
    this.service.getDoctorsOfLabs(
      this.labId
    )
      .pipe(finalize(() => { this.isLoading = false}))
      .subscribe(res => {
        this.doctorList = res;
      }, err => {
        console.error(err);
      })
  }
}
