import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { ChartsModule } from 'ng2-charts';
import { HighchartsChartModule } from 'highcharts-angular';

import { ModalregisterRoutingModule } from './modalregister-routing.module';
import { ModalregisterComponent } from './modalregister.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [ModalregisterComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    ModalregisterRoutingModule,
    FormsModule,
    HighchartsChartModule,
    NgbModule,
    ChartsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot()
  ]
})
export class ModalregisterModule { }
