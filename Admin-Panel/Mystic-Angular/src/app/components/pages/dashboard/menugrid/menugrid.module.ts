import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenugridComponent } from './menugrid.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { HighchartsChartModule } from 'highcharts-angular';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { MenugridRoutingModule } from './menugrid-routing.module';


@NgModule({
  declarations: [MenugridComponent, ContentComponent],
  imports: [
    CommonModule,
    CommonModule,
    SharedModule,
    MenugridRoutingModule,
    FormsModule,
    HighchartsChartModule,
    NgbModule,
    ChartsModule
  ]
})
export class MenugridModule { }
12
