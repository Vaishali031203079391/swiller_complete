import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { ChartsModule } from 'ng2-charts';
import { HighchartsChartModule } from 'highcharts-angular';

import { ModalloginRoutingModule } from './modallogin-routing.module';
import { ModalloginComponent } from './modallogin.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [ModalloginComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    ModalloginRoutingModule,
    FormsModule,
    HighchartsChartModule,
    NgbModule,
    ChartsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot()
  ]
})
export class ModalloginModule { }
