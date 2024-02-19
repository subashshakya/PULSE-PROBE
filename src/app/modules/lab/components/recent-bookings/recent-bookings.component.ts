import { Component, OnInit } from '@angular/core';
import { LabService } from '../../services/lab.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-recent-bookings',
  templateUrl: './recent-bookings.component.html',
  styleUrls: ['./recent-bookings.component.scss']
})
export class RecentBookingsComponent implements OnInit {
  public isLoading: boolean = false;
  public bookings: any[] = [];
  public labId: string = '1';

  constructor(
    private service: LabService
  ) {
    this.labId = localStorage.getItem('userId') ?? '1';
  }

  ngOnInit(): void {
    this.getBookingsData();
  }

  public getBookingsData = (): void => {
    this.isLoading = true;
    this.service.getBookingsData(
      this.labId
    )
    .pipe(finalize(() => { this.isLoading = false }))
    .subscribe(res => {
      this.bookings = res;
    }, err => {
      console.error(err);
    }
    );
  }
}
