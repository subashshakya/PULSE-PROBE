import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RouteData } from '../../enums/route-data.enum';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  public currentRoute: string = '';
  public routeData: typeof RouteData = RouteData;

  @Input() isLoggedIn: boolean = false;

  constructor(
    private router:Router,
    private activeRoute: ActivatedRoute
  ) {
  }

  public ngOnInit(): void {
    this.checkRouteData();
  }

  public checkRouteData = (): void => {
    this.activeRoute.data.subscribe(data => {
      if (data['routeData'] === RouteData.Lab) {
        this.currentRoute = RouteData.Lab;
      }
    })
  }

  public navigateTo = (path: string): void => {
    this.router.navigate([path]);
  }
}
