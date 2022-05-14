import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';

import { VectormapsRoutingModule } from './vectormaps-routing.module';
import { VectormapsComponent } from './vectormaps.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [VectormapsComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    VectormapsRoutingModule,
    HighchartsChartModule
  ]
})
export class VectormapsModule { }
