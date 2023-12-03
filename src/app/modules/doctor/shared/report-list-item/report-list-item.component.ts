import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-report-list-item',
  templateUrl: './report-list-item.component.html',
  styleUrls: ['./report-list-item.component.scss']
})
export class ReportListItemComponent {
  @Input() reportId: string = '';
  @Input() reportStatus: string = '';
  @Input() patientName: string = '';
  @Input() labBookedin: string = '';
  @Input() reportType: string = '';
}
