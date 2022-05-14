import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferHistoryComponent } from './offer-history.component';
import { OfferHistoryRoutingModule } from './offer-history-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [OfferHistoryComponent, ContentComponent],
  imports: [
    CommonModule,
    OfferHistoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class OfferHistoryModule { }
