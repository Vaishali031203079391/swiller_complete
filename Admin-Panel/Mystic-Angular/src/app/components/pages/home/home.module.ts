import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [HomeComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    SlickCarouselModule,
    NgbModule,
    ChartsModule
  ]
})
export class HomeModule { }
