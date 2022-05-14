import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressbarsRoutingModule } from './progressbars-routing.module';
import { ProgressbarsComponent } from './progressbars.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [ProgressbarsComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProgressbarsRoutingModule
  ]
})
export class ProgressbarsModule { }
