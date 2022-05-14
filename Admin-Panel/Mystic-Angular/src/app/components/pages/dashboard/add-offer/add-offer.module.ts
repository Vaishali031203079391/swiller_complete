import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddOfferComponent } from './add-offer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { AddOfferRoutingModule } from './add-offer-routing.module';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { ContentComponent } from './content/content.component';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { SortablejsModule } from 'ngx-sortablejs';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};
@NgModule({
  declarations: [AddOfferComponent, ContentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule,
    AddOfferRoutingModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
    NgWizardModule.forRoot(ngWizardConfig),
    Ng2SmartTableModule,
    PerfectScrollbarModule,
    SortablejsModule
  ],
providers: [
  {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }
]
})
export class AddOfferModule { }
