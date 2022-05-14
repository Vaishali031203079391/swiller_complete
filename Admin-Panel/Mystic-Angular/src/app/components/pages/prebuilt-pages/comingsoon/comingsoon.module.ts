import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComingsoonRoutingModule } from './comingsoon-routing.module';
import { ComingsoonComponent } from './comingsoon.component';

import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [ComingsoonComponent],
  imports: [
    CommonModule,
    SharedModule,
    ComingsoonRoutingModule
  ]
})
export class ComingsoonModule { }
