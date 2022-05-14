import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferDetailComponent } from './offer-detail.component';
import { OfferDetailRoutingModule } from './offer-detail-routing.module';
import { ContentComponent } from './content/content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  declarations: [OfferDetailComponent, ContentComponent],
  imports: [
    CommonModule,
    OfferDetailRoutingModule,
    NgbModule,
    SharedModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
  ]
})
export class OfferDetailModule { }
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}
