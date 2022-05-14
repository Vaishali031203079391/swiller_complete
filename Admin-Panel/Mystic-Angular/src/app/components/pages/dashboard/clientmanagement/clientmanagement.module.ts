import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';

import { ClientmanagementRoutingModule } from './clientmanagement-routing.module';
import { ClientmanagementComponent } from './clientmanagement.component';

import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [ClientmanagementComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    ClientmanagementRoutingModule,
    PerfectScrollbarModule,
    NgbModule,
    ChartsModule
  ]
})
export class ClientmanagementModule { }
