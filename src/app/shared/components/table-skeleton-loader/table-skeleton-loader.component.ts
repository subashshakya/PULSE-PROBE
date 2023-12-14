import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-skeleton-loader',
  templateUrl: './table-skeleton-loader.component.html',
  styleUrls: ['./table-skeleton-loader.component.scss']
})
export class TableSkeletonLoaderComponent implements OnInit {
  @Input() tableHeadings: any[] = [];
  public indexArray: number[] = [];

  ngOnInit(): void {
    this.getArray();
  }

  public getArray(): void {
    let totalLength = this.tableHeadings.length;
    if(totalLength <= 0) {
      return;
    } else {
      for(let i=0; i<totalLength; i++) {
        this.indexArray.push(i+1);
      }
    }
  }
}
