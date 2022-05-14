import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { GooglechartRoutingModule } from './googlechart-routing.module';
import { GooglechartComponent } from './googlechart.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [GooglechartComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    GooglechartRoutingModule,
    Ng2GoogleChartsModule
  ]
})
export class GooglechartModule { }
