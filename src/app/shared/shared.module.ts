import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { TableSkeletonLoaderComponent } from './components/table-skeleton-loader/table-skeleton-loader.component';
import { LoaderComponent } from './components/loader/loader.component';
@NgModule({
  declarations: [
    FooterComponent,
    BannerComponent,
    TableSkeletonLoaderComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    SkeletonModule,
    TableModule
  ],
  exports: [
    FooterComponent,
    BannerComponent,
    TableSkeletonLoaderComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
