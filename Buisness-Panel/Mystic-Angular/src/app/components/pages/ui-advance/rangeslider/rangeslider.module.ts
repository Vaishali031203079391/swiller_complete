import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonRangeSliderModule } from "ng2-ion-range-slider";

import { RangesliderRoutingModule } from './rangeslider-routing.module';
import { RangesliderComponent } from './rangeslider.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [RangesliderComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    RangesliderRoutingModule,
    IonRangeSliderModule
  ]
})
export class RangesliderModule { }
