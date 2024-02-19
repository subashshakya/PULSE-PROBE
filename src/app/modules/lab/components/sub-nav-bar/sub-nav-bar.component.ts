import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-nav-bar',
  templateUrl: './sub-nav-bar.component.html',
  styleUrls: ['./sub-nav-bar.component.scss']
})
export class SubNavBarComponent {
  @Input() title: string = '';

  constructor(
    private router: Router
  ) {}

  public navigateHome = (): void => {
    this.router.navigate(['/lab']);
  }
}
