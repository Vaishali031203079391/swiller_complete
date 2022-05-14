import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { WidgetsComponent } from './widgets.component';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [WidgetsComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    WidgetsRoutingModule,
    PerfectScrollbarModule,
    NgbModule,
    FormsModule,
    ChartsModule
  ]
})
export class WidgetsModule { }
