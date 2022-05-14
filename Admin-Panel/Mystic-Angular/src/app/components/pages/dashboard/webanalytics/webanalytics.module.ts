import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { HighchartsChartModule } from 'highcharts-angular';

import { WebanalyticsRoutingModule } from './webanalytics-routing.module';
import { WebanalyticsComponent } from './webanalytics.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { SpecialsListComponent } from './specials-list/specials-list.component';
import { NewEventsListComponent } from './new-events-list/new-events-list.component';
import { OpeningsComponent } from './openings/openings.component';

@NgModule({
  declarations: [WebanalyticsComponent, ContentComponent, SpecialsListComponent, NewEventsListComponent, OpeningsComponent],
  imports: [
    CommonModule,
    SharedModule,
    WebanalyticsRoutingModule,
    FormsModule,
    HighchartsChartModule,
    NgbModule,
    ChartsModule
  ]
})
export class WebanalyticsModule { }
