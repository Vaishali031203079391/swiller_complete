import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { SweetalertsRoutingModule } from './sweetalerts-routing.module';
import { SweetalertsComponent } from './sweetalerts.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [SweetalertsComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    SweetalertsRoutingModule,
    SweetAlert2Module.forRoot()
  ]
})
export class SweetalertsModule { }
