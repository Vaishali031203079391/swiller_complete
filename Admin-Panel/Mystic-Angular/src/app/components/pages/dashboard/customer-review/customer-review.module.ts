import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerReviewComponent } from './customer-review.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { SharedModule } from '../../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { CustomerReviewRoutingModule } from './customer-review-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  declarations: [CustomerReviewComponent, ContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    PerfectScrollbarModule,
    NgbModule,
    ChartsModule,
    CustomerReviewRoutingModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class CustomerReviewModule { }
