import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'pulse-probe';

  constructor(private elref:ElementRef) {}

  ngAfterViewInit(): void {
    this.elref.nativeElement.ownerDocument.body.style.backgroundColor="#fff5f6"
  }
}
