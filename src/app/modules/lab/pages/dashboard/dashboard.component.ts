import { Component, OnInit } from '@angular/core';
import { LabService } from '../../services/lab.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public isLoading: boolean = false;
  public labId: string = '1';
  public doctorList: any[] = [];

  constructor(
    private service: LabService,
  ) { }

  ngOnInit(): void {
    this.labId = localStorage.getItem('userId') ?? '1';
  }

  public getAllDoctors = (): void => {
    this.isLoading = true;
    this.service.getDoctorsOfLabs(
      this.labId
    )
      .pipe(finalize(() => { this.isLoading = false}))
      .subscribe(res => {
        if (!res?.message) {
          res.forEach((element: { firstName: string; lastName: string; }) => {
            this.doctorList.push(
              {
                title: element?.firstName + ' ' + element?.lastName,
                date: '2024-02-26'
              }
            )
          })
        }
      }, err => {
        console.error(err);
      })
  }
}
